export class BalanceResponseItem {
  currency!: string;
  total!: string;
  hold!: string;
  available!: string;
}

export class BalanceResponse {
  items!: BalanceResponseItem[];
}
