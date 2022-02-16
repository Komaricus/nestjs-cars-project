import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class GetCarQuery {
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class SearchCarsQuery {
  q: string;
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

export class UpdateCarDto extends CreateCarDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class DeleteCarQuery {
  @IsInt()
  @Type(() => Number)
  id: number;
}
