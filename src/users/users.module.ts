import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importe o PrismaModule

@Module({
  imports: [PrismaModule], // Adicione esta linha
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Opcional: se outros módulos precisarem usar UsersService
})
export class UsersModule {}