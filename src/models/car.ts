import { Model } from './model';

export interface Car {
  id: number;
  name: string;
  model: Model;
  color: string;
  year: number;
  image: string;
}
