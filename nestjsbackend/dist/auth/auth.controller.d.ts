import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtUser } from './jwt.strategy';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: import("../users/users.service").SafeUser;
    }>;
    me(user: JwtUser): JwtUser;
}
