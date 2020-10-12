import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoriesEntity } from './categories.entity';
import { CategoriesDTO } from './categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoriesRepository: Repository<CategoriesEntity>,
  ) {}

  async showAll() {
    return await this.categoriesRepository.find();
  }

  async create(data: CategoriesDTO) {
    const user = this.categoriesRepository.create(data);
    await this.categoriesRepository.save(data);
    return user;
  }

  async read(id: number) {
    return await this.categoriesRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<CategoriesDTO>) {
    await this.categoriesRepository.update({ id }, data);
    return await this.categoriesRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.categoriesRepository.delete({ id });
    return { deleted: true };
  }
}
