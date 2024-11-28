"use strict";
import { AlumnosModule } from './alumnos/alumnos.module';
import { DivisionEstudiosModule } from './division-estudios/division-estudios.module';
import { GtuvModule } from './gtuv/gtuv.module';
import { JefeCarreraModule } from './jefe-carrera/jefe-carrera.module';
import { DocenteModule } from './docente/docente.module';
import { SuperadminModule } from './superadmin/superadmin.module';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const projects_module_1 = require("./projects/projects.module");
const google_cloud_storage_service_1 = require("./projects/google-cloud-storage.service");
const files_controller_1 = require("./files/files.controller");
const files_service_1 = require("./files/files.service");
const files_module_1 = require("./files/files.module");
const asignacion_asesores_module_1 = require("./asignacion-asesores/asignacion-asesores.module");
const evaluacion_module_1 = require("./evaluacion/evaluacion.module");
const admin_module_1 = require("./admin/admin.module");
const reportes_module_1 = require("./reportes/reportes.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/RP'),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
            files_module_1.FilesModule,
            asignacion_asesores_module_1.AsignacionAsesoresModule,
            evaluacion_module_1.EvaluacionModule,
            admin_module_1.AdminModule,
            reportes_module_1.ReportesModule,
        ],
        providers: [google_cloud_storage_service_1.GoogleCloudStorageService, files_service_1.FilesService],
        controllers: [files_controller_1.FilesController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map