import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { OpentokModule } from './opentok/opentok.module';
import { SuscriptionsModule } from './suscriptions/suscriptions.module';
import { RoleModule } from './role/role.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    OpentokModule,
    SuscriptionsModule,
    RoleModule,

    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
