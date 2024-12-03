// src/modules/roles/dto/create-role.dto.ts
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';  // Asumiendo que Role está definido en Prisma como enum.

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEnum(Role)
  readonly roleType: Role;  // Enum para definir los tipos de rol (ALUMNO, ADMIN, etc.)
}
