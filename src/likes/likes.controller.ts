import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { LikesDTO } from './likes.dto';

@Controller('likes')
export class LikesController {
  Likes: LikesDTO[] = [];

  @Get()
  getAllLikes(): LikesDTO[] {
    return this.Likes;
  }

  @Get(':user_id')
  getLikesUById(@Param('user_id') user_id: string): LikesDTO {
    const likes = this.Likes.find(
      likes => likes.user_id == user_id,
    );
    return likes;
  }

  @Post()
  newLikes(@Body() likes: LikesDTO): LikesDTO {
    const newLikes = {
      ...likes,
      user_id: '' + this.Likes.length,
    };
    this.Likes = [...this.Likes, newLikes];
    return newLikes;
  }

  @Put(':id')
  updateLikes(
    @Param('id') id: string,
    @Body() likes: LikesDTO,
  ): LikesDTO {
    this.Likes = this.Likes.filter(
      likes => likes.user_id !== id,
    );
    this.Likes = [
      ...this.Likes,
      this.newLikes(likes),
    ];
    return likes;
  }

  @Delete(':id')
  deleteLikes(@Param('id') id: string) {
    this.Likes = this.Likes.filter(
      Likes => Likes.user_id !== id,
    );
  }
}
