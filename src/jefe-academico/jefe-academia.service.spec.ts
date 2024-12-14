import { Test, TestingModule } from '@nestjs/testing';
import { JefeAcademiaService } from './jefe-academia.service';

describe('JefeAcademiaService', () => {
  let service: JefeAcademiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JefeAcademiaService],
    }).compile();

    service = module.get<JefeAcademiaService>(JefeAcademiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
