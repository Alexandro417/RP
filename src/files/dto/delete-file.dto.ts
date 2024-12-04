// src/modules/files/dto/delete-file.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteFileDto {
  @IsString()
  @IsNotEmpty()
  readonly fileName: string; // Nombre del archivo que se va a eliminar del bucket
}
