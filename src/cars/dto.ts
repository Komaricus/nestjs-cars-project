import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class GetCarQuery {
  @IsInt()
  @Type(() => Number)
  id: number;
}
