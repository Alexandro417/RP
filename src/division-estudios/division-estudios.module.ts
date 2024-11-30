import { Module } from '@nestjs/common';
import { DivisionEstudiosController } from './division-estudios.controller';
import { DivisionEstudiosService } from './division-estudios.service';

@Module({
  controllers: [DivisionEstudiosController],
  providers: [DivisionEstudiosService]
})
export class DivisionEstudiosModule {}
