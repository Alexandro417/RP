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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("/Users/arman/residencias/prisma/prisma.service");
let EvaluacionService = class EvaluacionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(proyectoId, asesorId, calificacion, comentarios) {
        return this.prisma.evaluacion.create({
            data: {
                proyectoId,
                asesorId,
                calificacion,
                comentarios,
            },
        });
    }
    async findAll() {
        return this.prisma.evaluacion.findMany();
    }
    async findOne(id) {
        return this.prisma.evaluacion.findUnique({
            where: { id },
        });
    }
    async update(id, updateData) {
        return this.prisma.evaluacion.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id) {
        await this.prisma.evaluacion.delete({
            where: { id },
        });
    }
};
exports.EvaluacionService = EvaluacionService;
exports.EvaluacionService = EvaluacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvaluacionService);
//# sourceMappingURL=evaluacion.service.js.map