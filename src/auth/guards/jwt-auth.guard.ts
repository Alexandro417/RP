import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../../roles/roles.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1]; // Obtener el token del header

    if (!token) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded;

      // Verificar los roles requeridos
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true; // Si no se especifican roles, se permite el acceso
      }

      // Verificar si el usuario tiene algún de los roles requeridos
      const userRoles = decoded.roles || []; // Supongo que los roles están en decoded.roles
      const hasRole = requiredRoles.some((role) => userRoles.includes(role));

      return hasRole;
    } catch (error) {
      return false;
    }
  }
}

