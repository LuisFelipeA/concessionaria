import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class CriaUsuarioDTO {
    
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    nome: string;

    @IsEmail(undefined, { message: "Email invalido" })
    email: string;

    @MinLength(6, { message: "Senha precisa ter no minimo 6 caracteres"})
    senha: string
}