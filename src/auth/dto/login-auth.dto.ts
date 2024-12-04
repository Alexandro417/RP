// src/modules/auth/dto/login-auth.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
