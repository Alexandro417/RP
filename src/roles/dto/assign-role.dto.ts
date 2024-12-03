// src/modules/roles/dto/assign-role.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AssignRoleDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly roleId: string;
}
