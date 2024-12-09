import { Injectable } from '@nestjs/common';

@Injectable()
export class DocenteService {
  async hacerObservacion(proyectoId: string, observacion: string) {
    // Lógica para guardar la observación
    return `Observación para el proyecto ${proyectoId}: ${observacion}`;
  }
}
