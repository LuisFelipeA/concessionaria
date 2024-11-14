import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";


@Controller('/produtos')
export class ProdutoController {

    constructor (private produtoRepository: ProdutoRepository) {}

    @Get()
    async listaProdutos(){
        return this.produtoRepository.listar();
    }

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO){
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto
    }
}