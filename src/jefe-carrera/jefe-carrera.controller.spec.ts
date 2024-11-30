import { Test, TestingModule } from '@nestjs/testing';
import { JefeCarreraController } from './jefe-carrera.controller';

describe('JefeCarreraController', () => {
  let controller: JefeCarreraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JefeCarreraController],
    }).compile();

    controller = module.get<JefeCarreraController>(JefeCarreraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
