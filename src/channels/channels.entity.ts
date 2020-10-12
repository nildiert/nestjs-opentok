import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
} from 'typeorm';

//import { UsersEntity } from '../users/users.entity';
//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('channels')
export class ChannelsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  users: any;

  //@ManyToOne(
  //  type => UsersEntity,
  //  UsersEntity => UsersEntity.ChannelsEntity,
  //)
  //usersEntity: UsersEntity[];
}
