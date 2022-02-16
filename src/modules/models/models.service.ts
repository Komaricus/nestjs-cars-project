import { delay, Observable, of } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { Model } from 'src/models/model';
import { models } from 'src/mocks/models';

@Injectable()
export class ModelsService {
  models: Model[] = models;
  responseDelay = 300;

  getAll(): Observable<Model[]> {
    return of(this.models).pipe(delay(this.responseDelay));
  }
}
