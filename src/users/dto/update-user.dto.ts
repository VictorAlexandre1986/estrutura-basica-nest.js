import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ example: 'user@example.com', description: 'Email do usuário', required: false })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ example: 'John Doe', description: 'Nome do usuário', required: false })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({ example: 'newpassword123', description: 'Senha do usuário', required: false })
    @IsString()
    @MinLength(6)
    @IsOptional()
    password?: string;
}