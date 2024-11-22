import { Module } from '@nestjs/common';
import { ModelosModule } from './modelos/modelos.module';
import { MarcasModule } from './marcas/marcas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ModelosModule, 
    MarcasModule, 
    UsuarioModule, 
    ProdutoModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
})
export class AppModule {}
