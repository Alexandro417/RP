import { Test, TestingModule } from '@nestjs/testing';
import { DivisionEstudiosController } from './division-estudios.controller';

describe('DivisionEstudiosController', () => {
  let controller: DivisionEstudiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DivisionEstudiosController],
    }).compile();

    controller = module.get<DivisionEstudiosController>(DivisionEstudiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
