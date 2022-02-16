import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Model } from 'src/models/model';
import { ModelsService } from './models.service';

@Controller('models')
@ApiTags('Models')
export class ModelsController {
  constructor(private modelsService: ModelsService) {}

  @Get()
  @ApiOkResponse({
    type: Model,
    isArray: true,
  })
  findAll(): Promise<Model[]> {
    return new Promise((resolve) => {
      this.modelsService.getAll().subscribe((data) => {
        resolve(data);
      });
    });
  }
}
