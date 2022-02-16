import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NotFoundInterceptor } from 'src/interceptors';
import { Car } from 'src/models/car';
import { CarsService } from './cars.service';
import {
  GetCarQuery,
  CreateCarDto,
  UpdateCarDto,
  DeleteCarQuery,
  SearchCarsQuery,
  NotFoundResponse,
  CreateCarRequest,
  UpdateCarRequest,
  BadRequestResponse,
} from './dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { models } from 'src/mocks/models';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('cars')
@ApiTags('Cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  @ApiOkResponse({
    type: Car,
    isArray: true,
  })
  findAll(@Query() params: SearchCarsQuery): Promise<Car[]> {
    return new Promise((resolve) => {
      this.carsService.getAll(params.q).subscribe((data) => resolve(data));
    });
  }

  @Get(':id')
  @ApiOkResponse({
    type: Car,
  })
  @ApiNotFoundResponse({
    type: NotFoundResponse,
  })
  @UseInterceptors(NotFoundInterceptor)
  findOne(@Param() params: GetCarQuery): Promise<Car> {
    return new Promise((resolve) => {
      this.carsService.getById(Number(params.id)).subscribe((data) => {
        resolve(data);
      });
    });
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateCarRequest,
  })
  @ApiCreatedResponse({
    type: Car,
  })
  @ApiBadRequestResponse({
    type: BadRequestResponse,
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public',
        filename: function (req, file, cb) {
          const filetypes = /jpeg|jpg|png|gif/;
          const ext = filetypes.test(extname(file.originalname).toLowerCase());
          const mimetype = filetypes.test(file.mimetype);

          if (mimetype && ext) {
            return cb(null, uuidv4() + extname(file.originalname));
          } else {
            cb('Only images allowed.');
          }
        },
      }),
    }),
  )
  createOne(@UploadedFile() file, @Body() body: CreateCarDto): Promise<Car> {
    const modelIds = models.map((model) => model.id);
    if (!modelIds.includes(body.modelId))
      throw new BadRequestException('Model ID not exists.');

    if (!file) throw new BadRequestException('Image required.');

    return new Promise((resolve) => {
      this.carsService.create(body, file.filename).subscribe((data) => {
        resolve(data);
      });
    });
  }

  @Put()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UpdateCarRequest,
  })
  @ApiOkResponse({
    type: Car,
  })
  @ApiBadRequestResponse({
    type: BadRequestResponse,
  })
  @ApiNotFoundResponse({
    type: NotFoundResponse,
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public',
        filename: function (req, file, cb) {
          const filetypes = /jpeg|jpg|png|gif/;
          const ext = filetypes.test(extname(file.originalname).toLowerCase());
          const mimetype = filetypes.test(file.mimetype);

          if (mimetype && ext) {
            return cb(null, uuidv4() + extname(file.originalname));
          } else {
            cb('Only images allowed.');
          }
        },
      }),
    }),
  )
  @UseInterceptors(NotFoundInterceptor)
  updateOne(@UploadedFile() file, @Body() body: UpdateCarDto): Promise<Car> {
    const modelIds = models.map((model) => model.id);
    if (!modelIds.includes(body.modelId))
      throw new BadRequestException('Model ID not exists.');

    if (!file) throw new BadRequestException('Image required.');

    return new Promise((resolve) => {
      this.carsService.update(body, file.filename).subscribe((data) => {
        resolve(data);
      });
    });
  }

  @Delete(':id')
  @ApiOkResponse({
    type: String,
    description: 'deleted',
  })
  @ApiNotFoundResponse({
    type: NotFoundResponse,
  })
  @UseInterceptors(NotFoundInterceptor)
  deleteOne(@Param() params: DeleteCarQuery): Promise<string> {
    return new Promise((resolve) => {
      this.carsService.delete(params.id).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
