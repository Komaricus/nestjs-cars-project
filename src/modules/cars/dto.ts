import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class GetCarQuery {
  @ApiProperty({
    required: true,
  })
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class SearchCarsQuery {
  @ApiProperty({
    required: false,
  })
  q: string;
}

export class CreateCarDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsInt()
  @Type(() => Number)
  modelId: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  color: string;

  @ApiProperty({
    required: true,
  })
  @IsInt()
  @Type(() => Number)
  year: number;
}

export class UpdateCarDto extends CreateCarDto {
  @ApiProperty({
    required: true,
  })
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class DeleteCarQuery {
  @ApiProperty({
    required: true,
  })
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class CreateCarRequest extends CreateCarDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
}

export class UpdateCarRequest extends UpdateCarDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
}

export class NotFoundResponse {
  @ApiProperty({
    default: 404,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Not Found',
  })
  message: string;
}

export class BadRequestResponse {
  @ApiProperty({
    default: 400,
  })
  statusCode: number;

  @ApiProperty({
    default: 'Error description',
  })
  message: string;

  @ApiProperty({
    default: 'Bad Request',
  })
  error: string;
}
