// src/modules/files/dto/create-file.dto.ts
import { IsString, IsNotEmpty, IsOptional, IsMimeType } from 'class-validator';

export class CreateFileDto {
  @IsString()
  @IsNotEmpty()
  readonly fileName: string; // Nombre del archivo

  @IsMimeType()
  readonly mimeType: string; // Tipo de archivo (por ejemplo, image/jpeg, application/pdf)

  @IsString()
  @IsOptional()
  readonly fileUrl?: string; // URL del archivo almacenado (opcional, generado por el servicio)
}
