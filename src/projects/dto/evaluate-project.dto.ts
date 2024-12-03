// src/modules/projects/dto/evaluate-project.dto.ts
import { IsInt, IsOptional, IsString } from 'class-validator';

export class EvaluateProjectDto {
  @IsInt()
  readonly calificacion: number;

  @IsString()
  @IsOptional()
  readonly comentarios?: string;
}
