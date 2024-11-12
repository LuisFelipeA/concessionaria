import { Module } from '@nestjs/common';
import { ModelosModule } from './modelos/modelos.module';
import { MarcasModule } from './marcas/marcas.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ModelosModule, MarcasModule, UsuarioModule],
})
export class AppModule {}
