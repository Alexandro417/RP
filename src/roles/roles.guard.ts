import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Asegúrate de que el usuario esté disponible en la solicitud

    if (user.role !== 'admin') {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}
