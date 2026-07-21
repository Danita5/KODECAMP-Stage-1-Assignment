import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  productName!: string;
  @Column()
  productDescription!: string;
  @Column('float')
  productCost!: number;
  @Column('text', { array: true })
  productPicture!: string[];
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}