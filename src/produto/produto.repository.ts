import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {

    private produtos = []

    async salvar(produto){
        this.produtos.push(produto);
    }

    async listar(){
        return this.produtos
    }

    async existeComUsuarioId(usuarioId: number) {
        const possivelProduto = this.produtos.find(
            produto => produto.usuarioId === usuarioId
        );
        return possivelProduto !== undefined;
    }

}
