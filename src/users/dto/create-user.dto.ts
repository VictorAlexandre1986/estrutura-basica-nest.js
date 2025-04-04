import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'John Doe', description: 'Nome do usuário', required: false })
    @IsString()
    name?: string;

    @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
    @IsString()
    @MinLength(6)
    password: string;
}