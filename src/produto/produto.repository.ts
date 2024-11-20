import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {

    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity){
        this.produtos.push(produto);
    }

    async listar(){
        return this.produtos
    }

    async existeComUsuarioId(usuarioId: string) {
        const possivelProduto = this.produtos.find(
            produto => produto.usuarioId === usuarioId
        );
        return possivelProduto !== undefined;
    }

    private buscaPorId(id:string) {
        const possivelProduto = this.produtos.find(
            produtoSalvo => produtoSalvo.id === id
        );

        if (!possivelProduto) {
            throw new Error("Produto não existe");
        }

        return possivelProduto;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<ProdutoEntity>) {
        const produto = this.buscaPorId(id);

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === "id") {
                return;
            }

            if (chave === "usuarioId") {
                return;
            }

            produto[chave] = valor;
        });

        return produto;
    }

    async remove(id:string) {
        const produtoRemovido = this.buscaPorId(id);
        this.produtos = this.produtos.filter(
            produtoSalvo => produtoSalvo.id !== id
        );
        return produtoRemovido;
    }

}
