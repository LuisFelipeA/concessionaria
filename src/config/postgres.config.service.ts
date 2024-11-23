import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService){}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [__dirname + '/../**/*.entity{.js, .ts}'],
            synchronize: true
        }
    }
}


// npm install @nestjs/typeorm typeorm
// npm install @nestjs/config

// criar .env e configurar
// ex:
//  DB_HOST=127.0.0.1
//  DB_PORT=5432
//  DB_USER=postgres
//  DB_PASSWORD=1234
//  DB_NAME=loja

// npm install pg --save