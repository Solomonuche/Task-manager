import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(4)
    firstName: string;

    @IsNotEmpty()
    @MinLength(4)
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'user@example.com' })
    email: string;

    @IsStrongPassword()
    password: string;
}

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ example: 'user@example.com' })
    email: string;

    @IsNotEmpty()
    password: string;
}