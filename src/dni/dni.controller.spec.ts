import { Test, TestingModule } from '@nestjs/testing';
import { DniController } from './dni.controller';
import { ValidateResponse } from '../../dist/dni/dto/validate-response.dto';
import { DniService } from './dni.service';
import { mockDeep } from 'jest-mock-extended';

describe('DniController', () => {
  let controller: DniController;
  const dniServiceMock = mockDeep<DniService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DniController],
      providers: [
        {
          provide: DniService,
          useValue: dniServiceMock,
        },
      ],
    }).compile();

    controller = module.get<DniController>(DniController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return { dni, isValid:true } with a valid DNI', () => {
    dniServiceMock.isValid.mockReturnValue(true);
    const result = controller.validate({ dni: '12345678Z' });

    expect(result).toMatchObject<ValidateResponse>({
      dni: '12345678Z',
      isValid: true,
    });

    expect(result).toEqual({
      dni: '12345678Z',
      isValid: true,
    });
  });

  it('should return { dni, isValid:false } with an invalid DNI', () => {
    dniServiceMock.isValid.mockReturnValue(false);

    const result = controller.validate({ dni: '12345678A' });

    expect(result).toMatchObject<ValidateResponse>({
      dni: '12345678A',
      isValid: false,
    });

    expect(result).toEqual({
      dni: '12345678A',
      isValid: false,
    });
  });
});
