import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentDay: Date;

  @Column({ nullable: true })
  description: string;

  @Column()
  totalMoney: string;

  @Column()
  updateAt?: number;

  @Column({
    default: new Date().getTime(),
  })
  createAt: number;

  @ManyToOne(type => User, user => user.wallets)
  user: User;

  @ManyToOne(type => Category, category => category.categories)
  category: Category;
}
