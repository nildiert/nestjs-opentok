import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ChannelsEntity } from './channels.entity';
import { ChannelsDTO } from './Channels.dto';

@Injectable()
export class ChannelsService {
    constructor(
        @InjectRepository(ChannelsEntity)
        private channelsRepository: Repository<ChannelsEntity>,
    ) { }

    async showAll() {
        return await this.channelsRepository.find();
    }

    async create(data: ChannelsDTO) {
        const user = this.channelsRepository.create(data);
        await this.channelsRepository.save(data);
        return user;
    }

    async read(id: number) {
        return await this.channelsRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<ChannelsDTO>) {
        await this.channelsRepository.update({ id }, data);
        return await this.channelsRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.channelsRepository.delete({ id });
        return { deleted: true };
    }
}