import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proyecto } from '../schemas/proyecto.schema';
import { Etapa } from '../schemas/etapa.schema';

@Injectable()
export class DocenteService {
  constructor(
    @InjectModel('Proyecto') private readonly proyectoModel: Model<Proyecto>,
    @InjectModel('Etapa') private readonly etapaModel: Model<Etapa>,
  ) {}

  // Obtener las etapas de un proyecto
  async obtenerEtapas(proyectoId: string) {
    try {
      const proyecto = await this.proyectoModel.findById(proyectoId).populate('etapas').exec();
      if (!proyecto) {
        throw new Error('Proyecto no encontrado');
      }
      return proyecto.etapas;
    } catch (error) {
      throw new Error(`Error al obtener etapas: ${error.message}`);
    }
  }

  // Registrar una observación en una etapa
  async hacerObservacion(proyectoId: string, etapaId: string, observacion: string) {
    try {
      const etapa = await this.etapaModel.findById(etapaId).exec();
      if (!etapa) {
        throw new Error('Etapa no encontrada');
      }

      etapa.observaciones.push({
        texto: observacion,
        fecha: new Date(),
      });
      await etapa.save();

      return { message: 'Observación registrada con éxito', etapa };
    } catch (error) {
      throw new Error(`Error al hacer observación: ${error.message}`);
    }
  }
}

