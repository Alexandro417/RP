import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionAsesoresController } from './asignacion-asesores.controller';

describe('AsignacionAsesoresController', () => {
  let controller: AsignacionAsesoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionAsesoresController],
    }).compile();

    controller = module.get<AsignacionAsesoresController>(AsignacionAsesoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
