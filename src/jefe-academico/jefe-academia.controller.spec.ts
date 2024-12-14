import { Test, TestingModule } from '@nestjs/testing';
import { JefeAcademiaController } from './jefe-academia.controller';

describe('JefeAcademiaController', () => {
  let controller: JefeAcademiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JefeAcademiaController],
    }).compile();

    controller = module.get<JefeAcademiaController>(JefeAcademiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});