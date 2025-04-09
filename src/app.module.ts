import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { DniModule } from './dni/dni.module';

@Module({
  imports: [CarsModule, DniModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
