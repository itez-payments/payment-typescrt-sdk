import axios from 'axios';

import { PaymentService } from '../';

import {
  apiKey,
  balanceSuccessResponse,
  forbiddenResponse,
  orderListSuccessRequest,
  orderListSuccessResponse,
  orderStatusSuccessRequest,
  orderStatusSuccessResponse,
  payoutSuccessRequest,
  payoutSuccessResponse,
  privateKey,
  saleSuccessRequest,
  saleSuccessResponse,
  wrongApiKey,
} from './TestData';

jest.mock('axios');
(axios.create as jest.Mock).mockImplementation((config) => axios);

describe('Sale order create', () => {
  it('Success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: saleSuccessResponse });

    const paymentService = new PaymentService('https://someurl.com', privateKey, apiKey);

    expect(await paymentService.saleOrderCreate(saleSuccessRequest)).toEqual(saleSuccessResponse);
  });
  it('Forbidden', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 403, data: forbiddenResponse });

    const paymentService = new PaymentService('https:///someurl.com', privateKey, wrongApiKey);

    expect(await paymentService.saleOrderCreate(saleSuccessRequest)).toEqual(forbiddenResponse);
  });
});

describe('Payout order create', () => {
  it('Success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: payoutSuccessResponse });

    const paymentService = new PaymentService('https://someurl.com', privateKey, apiKey);

    expect(await paymentService.payoutOrderCreate(payoutSuccessRequest)).toEqual(payoutSuccessResponse);
  });
});

describe('Order list', () => {
  it('Success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: orderListSuccessResponse });

    const paymentService = new PaymentService('https://someurl.com', privateKey, apiKey);

    expect(await paymentService.listOrderRequest(orderListSuccessRequest)).toEqual(orderListSuccessResponse);
  });
});

describe('Order status', () => {
  it('Success', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: orderStatusSuccessResponse });

    const paymentService = new PaymentService('https://someurl.com', privateKey, apiKey);

    expect(await paymentService.statusOrderRequest(orderStatusSuccessRequest)).toEqual(orderStatusSuccessResponse);
  });
});

describe('Balance', () => {
  it('Success', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: balanceSuccessResponse });

    const paymentService = new PaymentService('https://someurl.com', privateKey, apiKey);

    expect(await paymentService.balanceRequest('ETH')).toEqual(balanceSuccessResponse);
  });
});
