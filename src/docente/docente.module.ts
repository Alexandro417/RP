import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocenteController } from './docente.controller';
import { DocenteService } from './docente.service';
import { ProyectoSchema } from '../schemas/proyecto.schema';
import { EtapaSchema } from '../schemas/etapa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Proyecto', schema: ProyectoSchema },
      { name: 'Etapa', schema: EtapaSchema },
    ]),
  ],
  controllers: [DocenteController],
  providers: [DocenteService],
})
export class DocenteModule {}
