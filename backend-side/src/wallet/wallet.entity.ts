import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentDay: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  totalMoney: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt?: string;

  @ManyToOne(type => User, user => user.wallets)
  user: User;

  @ManyToOne(type => Category, category => category.categories)
  category: Category;
}
