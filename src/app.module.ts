import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { UsersEntity } from "./users/user.entity";
import { OpentokModule } from './opentok/opentok.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
    UsersModule,
    OpentokModule,
    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
