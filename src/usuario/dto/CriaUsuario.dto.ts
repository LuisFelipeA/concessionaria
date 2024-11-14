import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {
    
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    nome: string;

    @IsEmail(undefined, { message: "Email invalido" })
    @EmailEhUnico({ message: "Já existe um usuário com este email"})
    email: string;

    @MinLength(6, { message: "Senha precisa ter no minimo 6 caracteres"})
    senha: string
}