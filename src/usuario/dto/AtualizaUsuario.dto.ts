import { IsEmail, IsNotEmpty, IsOptional, isString, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {
    
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: "Email invalido" })
    @EmailEhUnico({ message: "Já existe um usuário com este email"})
    @IsOptional()
    email: string;

    @MinLength(6, { message: "Senha precisa ter no minimo 6 caracteres"})
    @IsOptional()
    senha: string
}