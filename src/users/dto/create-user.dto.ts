export class CreateUserDto {
    username: string;
    password: string;
    email: string;
    fullName: string;
    role?: string; // Opcional, por defecto es "ALUMNO"
  }
  