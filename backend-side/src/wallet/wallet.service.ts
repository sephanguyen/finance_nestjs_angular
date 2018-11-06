import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './wallet.entity';
import { CreateWallet } from './interfaces/create-wallet.interface';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
  ) {}

  async createWallet(user: CreateWallet): Promise<any> {
    return this.walletRepository.save(user);
  }

  async findAll(): Promise<Wallet[]> {
    return await this.walletRepository.find();
  }

  async findByUserId(id: number): Promise<Wallet[]> {
    const result = await this.walletRepository.find({ user: id });
    return result;
  }

  async findById(id: number): Promise<Wallet> {
    const result = await this.walletRepository.find({ id });
    return result[0];
  }
}
