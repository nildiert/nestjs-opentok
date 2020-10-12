import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('likes')
export class LikesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  str_id: number;
}
