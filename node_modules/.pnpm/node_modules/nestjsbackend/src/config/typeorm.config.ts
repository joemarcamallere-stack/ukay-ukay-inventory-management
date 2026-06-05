import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const password = configService.get<string>('DB_PASSWORD');

    if (!password) {
      throw new Error('Missing DB_PASSWORD in .env. Set it to your PostgreSQL password.');
    }

    return {
      type: 'postgres',
      host: configService.get<string>('DB_HOST', 'localhost'),
      port: configService.get<number>('DB_PORT', 5432),
      username: configService.get<string>('DB_USERNAME', 'postgres'),
      password,
      database: configService.get<string>('DB_DATABASE', 'ims_restaurant'),
      autoLoadEntities: true,
      synchronize: true,
    };
  },
};
