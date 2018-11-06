export interface CreateWallet {
  // readonly id: number;
  readonly paymentDay: Date;
  readonly description: string;
  readonly totalMoney: string;
  readonly updateAt?: number;
  readonly createAt?: number;
  readonly userId: number;
  readonly categoryId: number;
}
