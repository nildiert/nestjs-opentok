import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('opentok')
export class OpentokEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apikey: string;

  @Column()
  sessionId: string;

  @Column()
  token: string;
}
