export class NetworkFee {
  amount!: string;
  currency!: string;
  rate!: string;
  withdrawal_currency!: string;
  withdrawal_network?: string;
  withdrawal_chain?: string | null;
  withdrawal_amount!: string;
}
