import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class GetCarQuery {
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class CreateCarDto {
  @IsString()
  name: string;

  @IsInt()
  @Type(() => Number)
  modelId: number;

  @IsString()
  color: string;

  @IsInt()
  @Type(() => Number)
  year: number;
}
