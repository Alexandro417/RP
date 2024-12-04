import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-playload.interface'; // Asegúrate de que la interfaz esté bien definida
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Servicio para manejar usuarios
    private readonly jwtService: JwtService,
  ) {}

  // Método para validar al usuario con email y contraseña
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email); // Buscar el usuario en la base de datos
    if (user && await bcrypt.compare(pass, user.password)) { // Asegúrate de usar await en bcrypt.compare
      const { password, ...result } = user; // Excluir la contraseña de la respuesta
      return result;
    }
    return null; // Si no se encuentra el usuario o las credenciales no coinciden, retorna null
  }

  // Método para realizar el login
  async login(user: any) {
    console.log('User data:', user); // Verifica los datos del usuario
    const payload: JwtPayload = { email: user.email, sub: user.id }; // Define el payload, asegúrate de que 'sub' sea el ID del usuario
    const token = this.jwtService.sign(payload); // Genera el token JWT
    console.log('Generated token:', token); // Imprime el token generado
  
    return {
      access_token: token, // Devuelve el token generado
    };
  }
}

