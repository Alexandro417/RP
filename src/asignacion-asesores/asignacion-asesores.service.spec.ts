import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionAsesoresService } from './asignacion-asesores.service';

describe('AsignacionAsesoresService', () => {
  let service: AsignacionAsesoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionAsesoresService],
    }).compile();

    service = module.get<AsignacionAsesoresService>(AsignacionAsesoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
