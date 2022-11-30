import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class ProductEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;
}