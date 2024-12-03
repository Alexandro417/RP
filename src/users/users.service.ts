import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Importar el servicio Prisma
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Crear un nuevo usuario
  async create(username: string, password: string, fullName: string, email: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        fullName: fullName,
        email:email,
      },
    });
  }

  // Obtener un usuario por su nombre de usuario
  async findOne(email: string): Promise<User | null> {
    if (!email) {
      console.error('Username is undefined or null');
      throw new Error('Username is required');
    }
  
    console.log('Searching for user with username:',email); // Agregar log para verificar
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Actualizar usuario
  async update(id: string, updateData: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  // Eliminar un usuario
  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
