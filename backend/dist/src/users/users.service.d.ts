import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    findAll(): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">[]>;
    findOne(id: string): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    remove(id: string): Promise<Omit<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }, "passwordHash">>;
    touchLastLogin(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        passwordHash: string;
        role: string;
        status: string;
        lastLogin: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    sanitizeUser<T extends {
        passwordHash?: string;
    }>(user: T): Omit<T, "passwordHash">;
}
