import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-playload.interface'; // Definir la interfaz
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private  readonly usersService: UsersService, // Servicio para manejar usuarios
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result; // Devuelve los datos del usuario sin la contraseña
    }
    return null;
  }

  async login(user: any) {
    const payload: JwtPayload = { username: user.username, sub: user.userId }; // JWT payload
    return {
      access_token: this.jwtService.sign(payload), // Generar JWT
    };
  }
}
