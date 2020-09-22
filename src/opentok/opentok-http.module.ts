import { Module } from '@nestjs/common';
import { OpentokModule } from './opentok.module';
import { OpentokService } from './opentok.service';
import { OpentokController } from './opentok.controller';

@Module({
  imports: [OpentokModule],
  providers: [OpentokService],
  controllers: [OpentokController],
})
export class OpentokHttpModule {}
