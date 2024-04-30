import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty()
    @MaxLength(20)
    nome: string;
    @IsNotEmpty()
    quantity: number;
}