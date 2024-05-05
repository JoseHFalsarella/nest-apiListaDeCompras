/*
import { IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @MinLength(6) @MaxLength(20)
    @Matches(/(?:(?=.*\d)|(?=.*\W))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "A senha deve conter ao menos um número, uma letra maiúscula e 6 ou mais caracteres."
    })
    password: string;
}
*/