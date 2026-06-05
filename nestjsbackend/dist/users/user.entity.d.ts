import { UserRole } from './user-role.enum';
export declare class User {
    id: string;
    email: string;
    name: string;
    passwordHash: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
