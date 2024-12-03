// src/modules/asignaciones/dto/create-asignacion.dto.ts
import { IsString } from 'class-validator';

export class CreateAsignacionDto {
  @IsString()
  readonly asesorId: string;

  @IsString()
  readonly usuarioId: string;

  @IsString()
  readonly proyectoId: string;
}
