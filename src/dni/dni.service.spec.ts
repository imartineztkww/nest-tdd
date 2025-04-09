import { Test, TestingModule } from '@nestjs/testing';
import { DniService } from './dni.service';

describe('DniService', () => {
  let service: DniService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DniService],
    }).compile();

    service = module.get<DniService>(DniService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return true with a valid DNI', () => {
    expect(service.isValid('12345678Z')).toBe(true);
  });

  it('should return false with a no valid DNI', () => {
    expect(service.isValid('12345678A')).toBe(false);
  });

  it('debería rechazar un DNI con formato incorrecto', () => {
    expect(service.isValid('1234A678Z')).toBe(false);
  });
});
