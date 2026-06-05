import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export type SafeUser = Omit<User, 'passwordHash'>;
export declare class UsersService implements OnModuleInit {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    onModuleInit(): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<SafeUser[]>;
    toSafeUser(user: User): SafeUser;
    private seedDemoUser;
}
