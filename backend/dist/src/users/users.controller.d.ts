import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
}
