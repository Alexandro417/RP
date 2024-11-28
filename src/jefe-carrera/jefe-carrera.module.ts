import { Module } from '@nestjs/common';
import { JefeCarreraController } from './jefe-carrera.controller';
import { JefeCarreraService } from './jefe-carrera.service';

@Module({
  controllers: [JefeCarreraController],
  providers: [JefeCarreraService]
})
export class JefeCarreraModule {}
