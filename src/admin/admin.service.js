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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("/Users/arman/residencias/prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllUsers() {
        return this.prisma.user.findMany();
    }
    async updateUserRole(userId, role) {
        if (role !== 'admin' && role !== 'user') {
            throw new common_1.ForbiddenException('Invalid role');
        }
        return this.prisma.user.update({
            where: { id: userId },
            data: { role },
        });
    }
    async deleteUser(userId) {
        await this.prisma.user.delete({
            where: { id: userId },
        });
    }
    async findAllProjects() {
        return this.prisma.project.findMany();
    }
    async updateProjectStatus(projectId, status) {
        if (!['pending', 'accepted', 'rejected'].includes(status)) {
            throw new common_1.ForbiddenException('Invalid status');
        }
        return this.prisma.project.update({
            where: { id: projectId },
            data: { status },
        });
    }
    async deleteProject(projectId) {
        await this.prisma.project.delete({
            where: { id: projectId },
        });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map