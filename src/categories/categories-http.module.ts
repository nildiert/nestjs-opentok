import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories.module';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [CategoriesModule],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class UserHttpModule {}
