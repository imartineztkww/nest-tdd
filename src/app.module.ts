import { Module } from '@nestjs/common';
import { DniModule } from './dni/dni.module';

@Module({
  imports: [DniModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
