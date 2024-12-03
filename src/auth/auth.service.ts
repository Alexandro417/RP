import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-playload.interface'; // Definir la interfaz
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Servicio para manejar usuarios
    private readonly jwtService: JwtService,
  ) {}

  // Método para validar al usuario con username y contraseña
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username); // Buscar el usuario en la base de datos
    if (user && await bcrypt.compare(pass, user.password)) { // Asegúrate de usar await en bcrypt.compare
      const { password, ...result } = user; // Excluir la contraseña de la respuesta
      return result;
    }
    return null; // Si no se encuentra el usuario o las credenciales no coinciden, retorna null
  }

  // Método para realizar el login
  async login(user: any) {
    const payload: JwtPayload = { username: user.username, sub: user.userId }; // Define el payload para JWT
    return {
      access_token: this.jwtService.sign(payload), // Genera y retorna el JWT
    };
  }
}

