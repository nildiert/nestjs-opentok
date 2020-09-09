import { Module } from '@nestjs/common';
import { OpentokController } from './opentok.controller';
import { OpentokService } from './opentok.service';

@Module({
  controllers: [OpentokController],
  providers: [OpentokService]
})
export class OpentokModule {}
