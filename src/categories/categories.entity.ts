import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


//pass the name of table inside @Entity() i.e "Categories", if you don't pass table name it will create "Categories_entity" table by default
@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string


}
