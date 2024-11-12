import { Module } from '@nestjs/common';
import { ModelosModule } from './modelos/modelos.module';
import { MarcasModule } from './marcas/marcas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ModelosModule, MarcasModule, UsuarioModule, ProdutoModule],
})
export class AppModule {}
