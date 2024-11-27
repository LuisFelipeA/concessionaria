import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoRepository } from "./produto.repository";
import { UsuarioIdEhUnicoValidator } from "./validacao/usuarioId-eh-unico.validator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { ProdutoService } from "./produto.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProdutoEntity])],
    controllers: [ProdutoController],
    providers: [ProdutoRepository, UsuarioIdEhUnicoValidator, ProdutoService]
})
export class ProdutoModule {}