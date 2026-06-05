"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcryptjs");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_role_enum_1 = require("./user-role.enum");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async onModuleInit() {
        await this.seedDemoUser('admin@cocoders.com', 'admin123', 'Admin User', user_role_enum_1.UserRole.Admin);
        await this.seedDemoUser('staff@cocoders.com', 'staff123', 'Staff User', user_role_enum_1.UserRole.Staff);
    }
    findByEmail(email) {
        return this.userRepository.findOne({ where: { email: email.toLowerCase() } });
    }
    async findAll() {
        const users = await this.userRepository.find({ order: { createdAt: 'DESC' } });
        return users.map((user) => this.toSafeUser(user));
    }
    toSafeUser(user) {
        const { passwordHash, ...safeUser } = user;
        return safeUser;
    }
    async seedDemoUser(email, password, name, role) {
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
        await this.userRepository.save(this.userRepository.create({
            email,
            name,
            passwordHash,
            role,
        }));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map