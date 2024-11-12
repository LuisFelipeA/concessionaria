import { Module } from '@nestjs/common';
import { ModelosModule } from './modelos/modelos.module';
import { MarcasModule } from './marcas/marcas.module';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [ModelosModule, MarcasModule],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
