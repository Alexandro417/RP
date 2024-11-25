"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionAsesoresController = void 0;
const common_1 = require("@nestjs/common");
const asignacion_asesores_service_1 = require("./asignacion-asesores.service");
let AsignacionAsesoresController = class AsignacionAsesoresController {
    constructor(asignacionAsesoresService) {
        this.asignacionAsesoresService = asignacionAsesoresService;
    }
    async asignarAsesor(asesorId, usuarioId, proyectoId) {
        return this.asignacionAsesoresService.asignarAsesor(asesorId, usuarioId, proyectoId);
    }
};
exports.AsignacionAsesoresController = AsignacionAsesoresController;
__decorate([
    (0, common_1.Post)('asignar'),
    __param(0, (0, common_1.Body)('asesorId')),
    __param(1, (0, common_1.Body)('usuarioId')),
    __param(2, (0, common_1.Body)('proyectoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AsignacionAsesoresController.prototype, "asignarAsesor", null);
exports.AsignacionAsesoresController = AsignacionAsesoresController = __decorate([
    (0, common_1.Controller)('asignacion-asesores'),
    __metadata("design:paramtypes", [asignacion_asesores_service_1.AsignacionAsesoresService])
], AsignacionAsesoresController);
//# sourceMappingURL=asignacion-asesores.controller.js.map