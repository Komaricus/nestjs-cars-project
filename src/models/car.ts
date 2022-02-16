import { ApiProperty } from '@nestjs/swagger';
import { Model } from './model';

export class Car {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  model: Model;

  @ApiProperty()
  color: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  image: string;
}
