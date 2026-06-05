import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: Omit<{
            id: string;
            email: string;
            name: string;
            passwordHash: string;
            role: string;
            status: string;
            lastLogin: Date;
            createdAt: Date;
            updatedAt: Date;
        }, "passwordHash">;
    }>;
}
