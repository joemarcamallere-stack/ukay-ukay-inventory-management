"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmConfig = {
    inject: [config_1.ConfigService],
    useFactory: (configService) => {
        const password = configService.get('DB_PASSWORD');
        if (!password) {
            throw new Error('Missing DB_PASSWORD in .env. Set it to your PostgreSQL password.');
        }
        return {
            type: 'postgres',
            host: configService.get('DB_HOST', 'localhost'),
            port: configService.get('DB_PORT', 5432),
            username: configService.get('DB_USERNAME', 'postgres'),
            password,
            database: configService.get('DB_DATABASE', 'ims_restaurant'),
            autoLoadEntities: true,
            synchronize: true,
        };
    },
};
//# sourceMappingURL=typeorm.config.js.map