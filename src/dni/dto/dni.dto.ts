import { IsString, Matches } from 'class-validator';

export class DniDto {
  @IsString()
  @Matches(/^\d{8}[A-Z]$/i, { message: 'DNI with invalid format' })
  dni: string;
}
