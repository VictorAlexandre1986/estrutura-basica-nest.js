import { Global, Module } from '@nestjs/common'; // Adicione Global
import { PrismaService } from './prisma.service';

@Global() // Isso torna o PrismaService disponível globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporte o serviço
})
export class PrismaModule {}