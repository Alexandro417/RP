import { Injectable } from '@nestjs/common';

@Injectable()
export class JefeCarreraService {
  async aceptarProtocolo(proyectoId: string) {
    // Lógica para aceptar el protocolo del proyecto
    return `Protocolo del proyecto ${proyectoId} aceptado`;
  }

  async asignarAsesor(proyectoId: string, asesorId: string) {
    // Lógica para asignar un asesor a un proyecto
    return `Asesor ${asesorId} asignado al proyecto ${proyectoId}`;
  }
}
