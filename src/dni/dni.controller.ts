import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ValidateResponse } from './dto/validate-response.dto';
import { DniService } from './dni.service';
import { DniDto } from './dto/dni.dto';

@Controller('dni')
export class DniController {
  constructor(private readonly dniService: DniService) {}

  @Post('validate')
  validate(@Body() body: DniDto): ValidateResponse {
    return { dni: body.dni, isValid: this.dniService.isValid(body.dni) };
  }
}
