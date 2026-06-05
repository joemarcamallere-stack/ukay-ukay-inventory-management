import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await this.prisma.user.create({
      data: { ...userData, passwordHash },
    });
    return this.sanitizeUser(user);
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return users.map((user) => this.sanitizeUser(user));
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return this.sanitizeUser(user);
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    const { password, ...userData } = updateUserDto;
    const data =
      password !== undefined
        ? { ...userData, passwordHash: await bcrypt.hash(password, 12) }
        : userData;
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    return this.sanitizeUser(user);
  }

  async remove(id: string) {
    await this.findOne(id);
    const user = await this.prisma.user.delete({ where: { id } });
    return this.sanitizeUser(user);
  }

  async touchLastLogin(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { lastLogin: new Date() },
    });
  }

  sanitizeUser<T extends { passwordHash?: string }>(user: T) {
    const { passwordHash: _passwordHash, ...safeUser } = user;
    return safeUser;
  }
}
