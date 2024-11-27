import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from "uuid"; 
import { ListaProdutoDTO } from "./dto/ListaProduto.dto";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { ProdutoService } from "./produto.service";

@Controller('/produtos')
export class ProdutoController {

    constructor (
        private produtoRepository: ProdutoRepository,
        private readonly produtoService: ProdutoService
    ) {}

    @Get()
    async listaProdutos(){
        return this.produtoService.listaProdutos();
    }

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO){

        const produtoEntity = new ProdutoEntity

        produtoEntity.id = uuid();
        produtoEntity.usuarioId = dadosDoProduto.usuarioId;
        produtoEntity.nome = dadosDoProduto.nome;
        produtoEntity.valor = dadosDoProduto.valor;
        produtoEntity.quantidade = dadosDoProduto.quantidade;
        produtoEntity.descricao = dadosDoProduto.descricao;
        produtoEntity.categoria = dadosDoProduto.categoria;
        // produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
        // produtoEntity.imagens = dadosDoProduto.imagens;
        
        this.produtoService.criaProduto(produtoEntity);

        return { 
            produto: new ListaProdutoDTO(produtoEntity.id, produtoEntity.nome),
            message: "Produto Criado com Sucesso"
        }   
    }

    @Put('/:id')
    async atualizaProduto(@Param('id') id:string, @Body() novosDados: AtualizaProdutoDTO) {
        const produtoAtualizado = await this.produtoService.atualizaProduto(id, novosDados);

        return {
            produto: produtoAtualizado,
            message: "Produto Atualizado com Sucesso"
        }
    }

    @Delete('/:id')
    async removeProduto(@Param('id') id:string){
        const produtoRemovido = await this.produtoService.deletaProduto(id);

        return {
            produto: produtoRemovido,
            message: "Produto Removido com Sucesso"
        }
    }
}