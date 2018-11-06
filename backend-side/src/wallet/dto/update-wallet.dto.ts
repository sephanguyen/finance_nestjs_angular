import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateWalletDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  readonly paymentDay: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly totalMoney: number;

  @IsNotEmpty()
  readonly updateAt: string;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoryId: number;
}
