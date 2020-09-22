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
import { SuscriptionsDTO } from './suscriptions.dto';

@Controller('suscriptions')
export class SuscriptionsController {
  Suscriptions: SuscriptionsDTO[] = [];

  @Get()
  getAllSuscriptions(): SuscriptionsDTO[] {
    return this.Suscriptions;
  }

  @Get(':user_id')
  getSuscriptionsUById(@Param('user_id') user_id: string): SuscriptionsDTO {
    const suscriptions = this.Suscriptions.find(
      suscriptions => suscriptions.user_id == user_id,
    );
    return suscriptions;
  }

  @Post()
  newSuscriptions(@Body() suscriptions: SuscriptionsDTO): SuscriptionsDTO {
    const newSuscriptions = {
      ...suscriptions,
      user_id: '' + this.Suscriptions.length,
    };
    this.Suscriptions = [...this.Suscriptions, newSuscriptions];
    return newSuscriptions;
  }

  @Put(':id')
  updateSuscriptions(
    @Param('id') id: string,
    @Body() suscriptions: SuscriptionsDTO,
  ): SuscriptionsDTO {
    this.Suscriptions = this.Suscriptions.filter(
      suscriptions => suscriptions.user_id !== id,
    );
    this.Suscriptions = [
      ...this.Suscriptions,
      this.newSuscriptions(suscriptions),
    ];
    return suscriptions;
  }

  @Delete(':id')
  deleteSuscriptions(@Param('id') id: string) {
    this.Suscriptions = this.Suscriptions.filter(
      Suscriptions => Suscriptions.user_id !== id,
    );
  }
}
