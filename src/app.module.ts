import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { OpentokModule } from './opentok/opentok.module';
import { SuscriptionsModule } from './suscriptions/suscriptions.module';
import { RoleModule } from './role/role.module';
import { CategoriesModule } from './categories/categories.module';
import { ChannelsModule } from './channels/channels.module';
import { LikesModule } from './likes/likes.module';
//import { Cat_StrModule } from './cat_str/cat_str.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    OpentokModule,
    SuscriptionsModule,
    RoleModule,
    CategoriesModule,
    ChannelsModule,
    LikesModule
   // Cat_StrModule

    

    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
