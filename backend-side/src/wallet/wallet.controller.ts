import {
  Controller,
  Get,
  Post,
  Response,
  Body,
  HttpStatus,
  Put,
  Req,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Wallet } from './wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Get()
  getWallets(): Promise<Wallet[]> {
    return this.walletService.findAll();
  }

  @Get('/my-wallet')
  getMyWallets(@Req() request: Request): Promise<Wallet[]> {
    return this.walletService.findByUserId(1);
  }

  // @Get(':name')
  // getProductByName(@Param() params: any): Promise<Wallet> {
  //   return this.walletService.findByName(params.name);
  // }

  @Post()
  createWallet(@Body() body: CreateWalletDto) {
    return this.walletService.createWallet(body);
  }

  @Put(':id')
  updateWallet(@Body() body: UpdateWalletDto) {
    return this.walletService.createWallet(body);
  }
}
