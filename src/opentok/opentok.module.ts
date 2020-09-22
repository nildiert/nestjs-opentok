import { Module } from '@nestjs/common';
import { OpentokController } from './opentok.controller';
import { OpentokService } from './opentok.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpentokEntity } from './opentok.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OpentokEntity])],
  controllers: [OpentokController],
  providers: [OpentokService],
  exports: [TypeOrmModule],
})
export class OpentokModule {}
