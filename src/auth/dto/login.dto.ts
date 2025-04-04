import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
    @IsString()
    @IsNotEmpty()
    password: string;
}