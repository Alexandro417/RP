import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
async login(@Body() loginDto: LoginAuthDto) {
  console.log('Login attempt:', loginDto); // Verifica que los datos estén llegando correctamente
  const user = await this.authService.validateUser(loginDto.email, loginDto.password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const response = await this.authService.login(user);
  console.log('Login successful, token:', response); // Verifica que el token se genere correctamente
  return response;
}

}
