import { BalanceResponse } from '../dto';
import { ListOrderResponse } from '../dto';
import { CreatePayoutOrderRequest } from '../dto';
import { PayoutOrderCreatedResponse } from '../dto';
import { PayoutOrderStatusResponse } from '../dto';
import { CreateSaleOrderRequest } from '../dto';
import { SaleOrderCreatedResponse } from '../dto';
import { SaleOrderStatusResponse } from '../dto';

export interface PaymentServiceInterface {
  saleOrderCreate: (saleOrderRequestDto: CreateSaleOrderRequest) => Promise<SaleOrderCreatedResponse>;
  payoutOrderCreate: (payoutOrderRequestDto: CreatePayoutOrderRequest) => Promise<PayoutOrderCreatedResponse>;
  statusOrderRequest: (orderUUID: string) => Promise<SaleOrderStatusResponse | PayoutOrderStatusResponse>;
  listOrderRequest: (listOrderRequestDto) => Promise<ListOrderResponse>;
  balanceRequest: (currency: string) => Promise<BalanceResponse[]>;
}
