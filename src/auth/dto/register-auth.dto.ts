// src/modules/auth/dto/register-auth.dto.ts
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
