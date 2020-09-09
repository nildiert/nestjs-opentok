import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from "./users/user.entity";
import { ContactsModule } from './contacts/contacts.module';
import { OpentokModule } from './opentok/opentok.module';

@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot(),
    UsersModule,
    ContactsModule,
    OpentokModule,
    // UsersModule
  ],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
