import { Injectable } from '@nestjs/common';
import { of, Observable, delay } from 'rxjs';
import { Car } from 'src/models/car';
import { cars } from './cars';

@Injectable()
export class CarsService {
  responseDelay = 300;
  cars: Car[] = cars;

  getAll(): Observable<Car[]> {
    return of(this.cars).pipe(delay(this.responseDelay));
  }

  getById(id: number): Observable<Car> {
    const car = this.cars.find((car) => car.id === id);
    return of(car).pipe(delay(this.responseDelay));
  }
}
