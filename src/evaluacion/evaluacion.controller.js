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
exports.EvaluacionController = void 0;
const common_1 = require("@nestjs/common");
const evaluacion_service_1 = require("./evaluacion.service");
let EvaluacionController = class EvaluacionController {
    constructor(evaluacionService) {
        this.evaluacionService = evaluacionService;
    }
    async create(proyectoId, asesorId, calificacion, comentarios) {
        return this.evaluacionService.create(proyectoId, asesorId, calificacion, comentarios);
    }
    async findAll() {
        return this.evaluacionService.findAll();
    }
    async findOne(id) {
        return this.evaluacionService.findOne(id);
    }
    async update(id, updateData) {
        return this.evaluacionService.update(id, updateData);
    }
    async remove(id) {
        await this.evaluacionService.remove(id);
    }
};
exports.EvaluacionController = EvaluacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('proyectoId')),
    __param(1, (0, common_1.Body)('asesorId')),
    __param(2, (0, common_1.Body)('calificacion')),
    __param(3, (0, common_1.Body)('comentarios')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EvaluacionController.prototype, "remove", null);
exports.EvaluacionController = EvaluacionController = __decorate([
    (0, common_1.Controller)('evaluacion'),
    __metadata("design:paramtypes", [evaluacion_service_1.EvaluacionService])
], EvaluacionController);
//# sourceMappingURL=evaluacion.controller.js.map