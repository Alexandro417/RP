// src/modules/evaluaciones/dto/create-evaluacion.dto.ts
import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateEvaluacionDto {
  @IsInt()
  readonly calificacion: number;

  @IsString()
  readonly proyectoId: string;

  @IsString()
  @IsOptional()
  readonly comentarios?: string;
}
