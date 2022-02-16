import { Controller, Get } from '@nestjs/common';
import { Model } from 'src/models/model';
import { ModelsService } from './models.service';

@Controller('models')
export class ModelsController {
  constructor(private modelsService: ModelsService) {}

  @Get()
  findAll(): Promise<Model[]> {
    return new Promise((resolve) => {
      this.modelsService.getAll().subscribe((data) => {
        resolve(data);
      });
    });
  }
}
