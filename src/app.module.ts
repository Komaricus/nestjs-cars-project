import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { ModelsModule } from './modules/models/models.module';

@Module({
  imports: [CarsModule, ModelsModule],
})
export class AppModule {}
