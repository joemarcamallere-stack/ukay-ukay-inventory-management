import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserRole } from '../users/user-role.enum';
export type JwtUser = {
    id: string;
    email: string;
    role: UserRole;
};
type JwtPayload = {
    sub: string;
    email: string;
    role: UserRole;
};
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): JwtUser;
}
export {};
