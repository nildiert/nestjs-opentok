import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RoleEntity } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private RoleRepository: Repository<RoleEntity>,
  ) {}

  async showAll() {
    return await this.RoleRepository.find();
  }

  async read(id: number) {
    return await this.RoleRepository.findOne({ where: { id: id } });
  }

  async destroy(id: number) {
    await this.RoleRepository.delete({ id });
    return { deleted: true };
  }
}
