import { AbstractOrderResponse } from '../AbstractOrderResponse';

import { PayoutInputAsset } from './InputAsset';
import { NetworkFee } from './NetworkFee';
import { PayoutOutputAsset } from './OutputAsset';

export class PayoutOrderCreatedResponse extends AbstractOrderResponse {
  from!: PayoutInputAsset;
  to!: PayoutOutputAsset;
  network_fee!: NetworkFee;
}
