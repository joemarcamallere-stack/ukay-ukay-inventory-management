import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRole } from './user-role.enum';

export type SafeUser = Omit<User, 'passwordHash'>;

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    await this.seedDemoUser('admin@cocoders.com', 'admin123', 'Admin User', UserRole.Admin);
    await this.seedDemoUser('staff@cocoders.com', 'staff123', 'Staff User', UserRole.Staff);
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email.toLowerCase() } });
  }

  async findAll() {
    const users = await this.userRepository.find({ order: { createdAt: 'DESC' } });
    return users.map((user) => this.toSafeUser(user));
  }

  toSafeUser(user: User): SafeUser {
    const { passwordHash, ...safeUser } = user;
    return safeUser;
  }

  private async seedDemoUser(email: string, password: string, name: string, role: UserRole) {
    const existingUser = await this.findByEmail(email);
    const passwordHash = await bcrypt.hash(password, 10);

    if (existingUser) {
      await this.userRepository.save({
        ...existingUser,
        name: existingUser.name || name,
        passwordHash: existingUser.passwordHash || passwordHash,
        role: existingUser.role || role,
        isActive: true,
      });
      return;
    }

    await this.userRepository.save(
      this.userRepository.create({
        email,
        name,
        passwordHash,
        role,
      }),
    );
  }
}
