import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoRepository } from "./produto.repository";
import { UsuarioIdEhUnicoValidator } from "./validacao/usuarioId-eh-unico.validator";

@Module({
    controllers: [ProdutoController],
    providers: [ProdutoRepository, UsuarioIdEhUnicoValidator]
})
export class ProdutoModule {}