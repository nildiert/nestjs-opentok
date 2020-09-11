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

import { ChannelsService } from './channels.service';
import { ChannelsDTO } from './channels.dto';

@Controller('Channels')
export class ChannelsController {
    constructor(private channelsService: ChannelsService) { }

    @Get()
    async showAllUsers() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.channelsService.showAll(),
        };
    }

    @Post()
    async createUsers(@Body() data: ChannelsDTO) {
        return {
            statusCode: HttpStatus.OK,
            message: 'channel creatd successfully',
            data: await this.channelsService.create(data),
        };
    }

    @Get(':id')
    async readChannel(@Param('id') id: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.channelsService.read(id),
        };
    }

    @Patch(':id')
    async uppdateChannels(@Param('id') id: number, @Body() data: Partial<ChannelsDTO>) {
        return {
            statusCode: HttpStatus.OK,
            message: 'Channel update successfully',
            data: await this.channelsService.update(id, data),
        };
    }

    @Delete(':id')
    async deleteChannels(@Param('id') id: number) {
        await this.channelsService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Channel deleted successfully',
        };
    }
}