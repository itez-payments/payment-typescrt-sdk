import {
  ListOrderRequest,
  ListOrderResponse,
  CreatePayoutOrderRequest,
  PayoutOrderCreatedResponse,
  PayoutOrderStatusResponse,
  CreateSaleOrderRequest,
  SaleOrderCreatedResponse,
  SaleOrderStatusResponse,
  BalanceResponse,
} from '../dto';
import { PaymentServiceInterface } from '../interfaces';
import { signRequest } from '../utils/sign';

import { AbstractService } from './AbstractService';

type CreateSaleOrderRequestWithTimestamp = CreateSaleOrderRequest & { timestamp?: number };
type CreatePayoutOrderRequestWithTimestamp = CreatePayoutOrderRequest & { timestamp?: number };
type ListOrderRequestWithTimestamp = ListOrderRequest & { timestamp?: number };

const SALE_URL = '/order/sale';
const PAYOUT_URL = '/order/payout';
const STATUS_URL = '/order/status/';
const LIST_ORDER_URL = '/order/list';
const BALANCE_URL = '/balance';

export class PaymentService extends AbstractService implements PaymentServiceInterface {
  private readonly privateKey: string;

  constructor (paymentUrl: string, privateKey: string, apiKey: string) {
    super(paymentUrl, apiKey);
    this.privateKey = privateKey;
  }

  public async saleOrderCreate (saleOrderRequestDto: CreateSaleOrderRequest): Promise<SaleOrderCreatedResponse> {
    const saleOrderRequest: CreateSaleOrderRequestWithTimestamp = saleOrderRequestDto;
    saleOrderRequest.timestamp = Date.now();
    const signature = signRequest(saleOrderRequest, this.privateKey);

    const response = await this.axios.post(
      SALE_URL,
      saleOrderRequest,
      {
        headers: {
          signature,
        },
      },
    );

    return response.data;
  }

  public async payoutOrderCreate (payoutOrderRequestDto: CreatePayoutOrderRequest): Promise<PayoutOrderCreatedResponse> {
    const payoutOrderRequest: CreatePayoutOrderRequestWithTimestamp = payoutOrderRequestDto;
    payoutOrderRequest.timestamp = Date.now();
    const signature = signRequest(payoutOrderRequest, this.privateKey);

    const response = await this.axios.post(
      PAYOUT_URL,
      payoutOrderRequest,
      {
        headers: {
          signature,
        },
      },
    );

    return response.data;
  }

  public async statusOrderRequest (orderUUID: string): Promise<SaleOrderStatusResponse | PayoutOrderStatusResponse> {
    const response = await this.axios.get(
      STATUS_URL + orderUUID,
    );

    return response.data;
  }

  public async listOrderRequest (listOrderRequestDto: ListOrderRequest): Promise<ListOrderResponse> {
    const listOrderRequest: ListOrderRequestWithTimestamp = listOrderRequestDto;
    listOrderRequest.timestamp = Date.now();
    const signature = signRequest(listOrderRequest, this.privateKey);

    const response = await this.axios.post(
      LIST_ORDER_URL,
      listOrderRequest,
      {
        headers: {
          signature,
        },
      },
    );

    return response.data;
  }

  public async balanceRequest (currency: string): Promise<BalanceResponse[]> {
    const balanceRequest = {
      currency,
      timestamp: Date.now(),
    };

    const signature = signRequest(balanceRequest, this.privateKey);

    const response = await this.axios.post(
      BALANCE_URL,
      balanceRequest,
      {
        headers: {
          signature,
        },
      },
    );

    return response.data;
  }
}
