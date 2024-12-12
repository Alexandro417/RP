import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';  // Importar el guardia JWT

@Controller('profile') // Definir la ruta base '/profile'
export class ProfileController {
  @Get()
  @UseGuards(AuthGuard('jwt'))  // Aplica el guard para proteger esta ruta
  getProfile(@Request() req) {
    // Aquí se obtiene el usuario autenticado del request (el guard JWT lo ha agregado al request)
    return req.user;  // Devuelve los datos del usuario autenticado
  }
}
