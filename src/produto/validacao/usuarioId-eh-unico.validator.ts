import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../produto.repository";

@Injectable()
@ValidatorConstraint({async: true})
export class UsuarioIdEhUnicoValidator implements ValidatorConstraintInterface{
    
    constructor(private produtoRepository: ProdutoRepository) {}
    
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>{
        const produtoComUsuarioIdExiste = await this.produtoRepository.existeComUsuarioId(value);
        return !produtoComUsuarioIdExiste;
    }
}

export const UsuarioIdEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: UsuarioIdEhUnicoValidator
        })
    }
}