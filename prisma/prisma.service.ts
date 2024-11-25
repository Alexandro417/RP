import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  // Se ejecuta cuando el módulo se inicializa
  async onModuleInit() {
    await this.$connect();
  }

  // Se ejecuta cuando el módulo se destruye (por ejemplo, al apagar el servidor)
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
