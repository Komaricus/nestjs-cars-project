import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { NotFoundInterceptor } from 'src/interceptors';
import { Car } from 'src/models/car';
import { CarsService } from './cars.service';
import { GetCarQuery } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return new Promise((resolve) => {
      this.carsService.getAll().subscribe((data) => resolve(data));
    });
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  findOne(@Param() params: GetCarQuery): Promise<Car> {
    return new Promise((resolve) => {
      this.carsService.getById(Number(params.id)).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
