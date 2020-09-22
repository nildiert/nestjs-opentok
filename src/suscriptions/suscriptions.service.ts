import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SuscriptionsEntity } from './suscriptions.entity';
import { SuscriptionsDTO } from './suscriptions.dto';

@Injectable()
export class SuscriptionsService {
  constructor(
    @InjectRepository(SuscriptionsEntity)
    private SuscriptionsRepository: Repository<SuscriptionsEntity>,
  ) {}

  async showAll() {
    return await this.SuscriptionsRepository.find();
  }

  async read(id: number) {
    return await this.SuscriptionsRepository.findOne({ where: { id: id } });
  }

  async destroy(id: number) {
    await this.SuscriptionsRepository.delete({ id });
    return { deleted: true };
  }
}
