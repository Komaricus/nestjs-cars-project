import { Injectable } from '@nestjs/common';
import { of, Observable, delay } from 'rxjs';
import { models } from 'src/mocks/models';
import { Car } from 'src/models/car';
import { Model } from 'src/models/model';
import { cars } from '../mocks/cars';
import { CreateCarDto } from './dto';

@Injectable()
export class CarsService {
  responseDelay = 300;
  cars: Car[] = cars;
  models: Model[] = models;
  lastId = 6;

  getAll(): Observable<Car[]> {
    return of(this.cars).pipe(delay(this.responseDelay));
  }

  getById(id: number): Observable<Car> {
    const car = this.cars.find((car) => car.id === id);
    return of(car).pipe(delay(this.responseDelay));
  }

  create(body: CreateCarDto, filename: string): Observable<Car> {
    this.lastId += 1;

    const car: Car = {
      id: this.lastId,
      name: body.name,
      model: this.models.find((model) => model.id === body.modelId),
      color: body.color,
      year: body.year,
      image: filename,
    };

    setTimeout(() => {
      this.cars.push(car);
    }, this.responseDelay);

    return of(car).pipe(delay(this.responseDelay));
  }
}
