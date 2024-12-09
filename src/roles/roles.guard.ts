import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { JwtService } from '@nestjs/jwt'; // Si estás usando autenticación JWT

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // Si la ruta no tiene roles específicos, está abierta
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; 

    if (!user) {
      return false; // Si no hay usuario autenticado, no permitimos el acceso
    }

    // Verificamos si el usuario tiene al menos uno de los roles necesarios
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}

