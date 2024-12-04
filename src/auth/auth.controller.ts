import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // Definimos la ruta POST para login
  async login(@Body() loginDto: LoginAuthDto) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password); // Validamos el usuario
    if (!user) {
      throw new Error('Invalid credentials'); // Si no se encuentra al usuario o las credenciales son incorrectas
    }
    return this.authService.login(user); // Retornamos el JWT si la validación es exitosa
  }
}
