import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  readonly paymentDay: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly totalMoney: number;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoryId: number;
}
