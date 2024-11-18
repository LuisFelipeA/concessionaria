import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid"; // para usar uuid - npm install uuid e npm install -D @types/uuid
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor (private usuarioRepository: UsuarioRepository) {}

    @Get()
    async listaUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();

        const usuarioLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuarioLista;
    }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity;

        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);

        return { 
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: "Usuario Criado com Sucesso"}
    }
}