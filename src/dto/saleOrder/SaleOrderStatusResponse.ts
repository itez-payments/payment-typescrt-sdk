import { SaleOrderCreatedResponse } from './SaleOrderCreatedResponse';

export class SaleOrderStatusResponse extends SaleOrderCreatedResponse {
  crypto_amount_payed?: string;
  decline_reason?: string;
  confirmation?:
  {
    hash: string | null;
    current: number | null;
    required: number | null;
  }[];
}
