import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { ChannelsEntity } from './channels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelsEntity])],
  providers: [ChannelsService],
  controllers: [ChannelsController],
  exports: [TypeOrmModule],
})
export class ChannelsModule {}
