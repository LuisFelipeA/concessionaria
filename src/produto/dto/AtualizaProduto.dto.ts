import { Type } from 'class-transformer';
import {  ArrayMinSize,  IsArray,  IsNotEmpty,  IsNumber,  IsOptional,  IsString,  IsUrl,  MaxLength,  Min,  ValidateNested} from 'class-validator';
import { UsuarioIdEhUnico } from '../validacao/usuarioId-eh-unico.validator';

export class CaracteristicaProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    @IsOptional()
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    @IsOptional()
    descricao: string;

}

export class ImagemProdutoDTO {
    @IsUrl(undefined ,{ message: 'URL para imagem inválida' })
    @IsOptional()
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    @IsOptional()
    descricao: string;

}

export class AtualizaProdutoDTO {

    @UsuarioIdEhUnico({ message: "Já existe um produto com este UsuarioId"})
    @IsOptional()
    usuarioId: string;

    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    @IsOptional()
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    @IsOptional()
    valor: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    @IsOptional()
    quantidade: number;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, { message: 'Descrição não pode ter mais que 1000 caracteres' })
    @IsOptional()
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    @IsOptional()
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    @IsOptional()
    imagens: ImagemProdutoDTO[];
    
    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    @IsOptional()
    categoria: string;

}