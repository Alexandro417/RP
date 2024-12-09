import { SetMetadata } from '@nestjs/common';

// Definimos una clave para los metadatos de roles
export const ROLES_KEY = 'roles';

// Creamos el decorador @Roles que permitirá asignar roles a las rutas
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
