import { ApiProperty } from '@nestjs/swagger';

export class Model {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
