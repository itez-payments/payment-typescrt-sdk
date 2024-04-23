import { AbstractOrderResponse } from '../AbstractOrderResponse';

import { Deposit } from './Deposit';
import { InputAsset } from './InputAsset';
import { OutputAsset } from './OutputAsset';

export class SaleOrderCreatedResponse extends AbstractOrderResponse {
  from!: InputAsset;
  to!: OutputAsset;
  deposit!: Deposit;
  order_expired_at!: string;
}
