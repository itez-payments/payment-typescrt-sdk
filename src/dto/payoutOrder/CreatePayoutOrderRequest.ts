import { PayoutInputAsset } from './InputAsset';
import { PayoutOutputAsset } from './OutputAsset';
import { PayoutOrderCustomer } from './PayoutOrderCustomer';

export class CreatePayoutOrderRequest {
  payment_id!: string;
  customer?: PayoutOrderCustomer;
  from!: PayoutInputAsset;
  to!: PayoutOutputAsset;
  description?: string;
}
