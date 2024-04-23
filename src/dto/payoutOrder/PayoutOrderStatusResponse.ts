import { PayoutOrderCreatedResponse } from './PayoutOrderCreatedResponse';

export class PayoutOrderStatusResponse extends PayoutOrderCreatedResponse {
  decline_reason?: string;
}
