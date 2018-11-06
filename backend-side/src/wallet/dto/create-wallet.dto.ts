import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  readonly paymentDay: Date;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly totalMoney: string;

  @IsNumber()
  readonly updateAt: number;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoryId: number;
}
