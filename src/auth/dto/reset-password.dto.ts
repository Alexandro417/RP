// src/modules/auth/dto/reset-password.dto.ts
import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  readonly token: string;

  @IsString()
  @MinLength(8)
  readonly newPassword: string;
}
