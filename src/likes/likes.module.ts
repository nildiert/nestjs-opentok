import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
@Module({
  imports: [],
  controllers: [LikesController],
  providers: [],
})
export class LikesModule {}
