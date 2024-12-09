import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { GoogleCloudStorageService } from './projects/google-cloud-storage.service';
import { FilesController } from './files/files.controller';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
import { AsignacionAsesoresModule } from './asignacion-asesores/asignacion-asesores.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { AdminModule } from './admin/admin.module';
import { ReportesModule } from './reportes/reportes.module';

// Importamos el RolesGuard y JwtService para la validación de roles
import { RolesGuard } from './roles/roles.guard';
import { APP_GUARD } from '@nestjs/core'; // Necesario para aplicar el guard globalmente
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/RP'),
    AuthModule,
    UsersModule,
    ProjectsModule,
    FilesModule,
    AsignacionAsesoresModule,
    EvaluacionModule,
    AdminModule,
    ReportesModule,
  ],
  providers: [
    GoogleCloudStorageService,
    FilesService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Aplicamos el guard de roles globalmente
    },
    JwtService, // Añadimos el JwtService para que funcione correctamente con los roles
  ],
  controllers: [FilesController],
})
export class AppModule {}
