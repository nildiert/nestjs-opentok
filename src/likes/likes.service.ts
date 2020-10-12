import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LikesEntity } from './likes.entity';
import { LikesDTO } from './likes.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(LikesEntity)
    private LikesRepository: Repository<LikesEntity>,
  ) {}

  async showAll() {
    return await this.LikesRepository.find();
  }

  async read(id: number) {
    return await this.LikesRepository.findOne({ where: { id: id } });
  }

  async destroy(id: number) {
    await this.LikesRepository.delete({ id });
    return { deleted: true };
  }
}
