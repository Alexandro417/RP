"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionAsesoresModule = void 0;
const common_1 = require("@nestjs/common");
const asignacion_asesores_controller_1 = require("./asignacion-asesores.controller");
const asignacion_asesores_service_1 = require("./asignacion-asesores.service");
const prisma_service_1 = require("/Users/arman/residencias/prisma/prisma.service");
let AsignacionAsesoresModule = class AsignacionAsesoresModule {
};
exports.AsignacionAsesoresModule = AsignacionAsesoresModule;
exports.AsignacionAsesoresModule = AsignacionAsesoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [asignacion_asesores_controller_1.AsignacionAsesoresController],
        providers: [asignacion_asesores_service_1.AsignacionAsesoresService, prisma_service_1.PrismaService],
    })
], AsignacionAsesoresModule);
//# sourceMappingURL=asignacion-asesores.module.js.map