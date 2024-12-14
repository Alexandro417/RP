import { Module } from '@nestjs/common';
import { JefeAcademiaController } from './jefe-academia.controller';
import { JefeAcademiaService } from './jefe-academia.service';

@Module({
  controllers: [JefeAcademiaController],
  providers: [JefeAcademiaService]
})
export class JefeCarreraModule {}