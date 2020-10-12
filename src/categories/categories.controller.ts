import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CategoriesDTO } from './categories.dto';

@Controller('Categories')
export class CategoriesController {
  constructor(private CategoriesService: CategoriesService) {}

  @Get()
  async showAllCategories() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.CategoriesService.showAll(),
    };
  }

  @Post()
  async createCategories(@Body() data: CategoriesDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User added successfully',
      data: await this.CategoriesService.create(data),
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.CategoriesService.read(id),
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<CategoriesDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User update successfully',
      data: await this.CategoriesService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.CategoriesService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
