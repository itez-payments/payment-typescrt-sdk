import { Customer } from '../dto/Customer';
import { PayoutInputAsset } from '../dto/payoutOrder/InputAsset';
import { NetworkFee } from '../dto/payoutOrder/NetworkFee';
import { PayoutOutputAsset } from '../dto/payoutOrder/OutputAsset';
import { PayoutOrderCustomer } from '../dto/payoutOrder/PayoutOrderCustomer';
import { Deposit } from '../dto/saleOrder/Deposit';
import { InputAsset } from '../dto/saleOrder/InputAsset';
import { OutputAsset } from '../dto/saleOrder/OutputAsset';
import { SaleOrderCustomer } from '../dto/saleOrder/SaleOrderCustomer';

export const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXAIBAAKBgQDJaHilmfVIXvtKCpPFN0swRm6ryFo3ibPZkXmOieP4nkWiNnKC\n' +
    'JRG8DDzArh4/tQjp2n3Oqz58Adfg2EGqQHBsMNnMJXl5Qup8oipv34E6BXH6uxXD\n' +
    'ehtPp2xQo+lOsC0tOqoCjVhYvwKnapX2q5TJY9KSsA5U4cgHaFKw3FFUFwIDAQAB\n' +
    'AoGAYMctac1/2iWhs+M/PD2kiG7fkPW1vAgT/pBzi3VgsL9EkHx/K2AqlGSA8Mj5\n' +
    'yfzwaoZNe3g3jxjHpcfkTa2nFssz1Ccjj0+h9Z9Jaw8goVPiv/0Kr6p76H1Q7/oJ\n' +
    'V+bJwlKtGbrdBFTuwiEQSvyN+BHwMWziD/dV2wuxQbNVx/kCQQDtrPeKlJXPWFm8\n' +
    'y93H+h7qc8Me1sLpFcIlRF/UASLiNAOMC/oB1bZsS+mEHozl+C/lYYIBWmv6phRh\n' +
    '33PsQf3rAkEA2O+v5LPQ+ufEsx8xGMH/vwJhZYvwuq4CK5d47fEty5Hc4Yktq/sV\n' +
    'nQPU3fOe1UkOyMgzQ432oUl8twY8snn7hQJAMAUHSnd0wRyvnMZvu6ycPHBBFuT7\n' +
    'Ik6kGBV1awcDvkIWCWCOFXrRTZYUyv3FJ916B9UoiA91y4Fsks2rxSscGwJBALyN\n' +
    'R7JeYCtUOvD9EW1VYPYiGYlrYma/S3+b/i3BzG39b6BP3PR4HccFR4VKdCkpgMIe\n' +
    'z//Naimxd8aUkzkFMQkCQH8zBUpeqWDJ9rgMOSFDTfYqUxd/Fuy4NzvFJ6t/t4JM\n' +
    'GVmo4x4D4PkL+2A9qaUs1IHJyWBZze5UiOdCY8bgl7U=\n' +
    '-----END RSA PRIVATE KEY-----';

export const apiKey = 'w7JkRrkC7DwPqaJDjNufvBKgdfC4ukHm';

export const balanceSuccessRequest = BigInt(1);

export const balanceSuccessResponse = {
  items: [
    {
      currency: 'ETH',
      total: '1000000000.0004995399991180000000',
      hold: '0.0000000000000000000000',
      available: '1000000000.000499539999118',
    },
  ],
};

export const wrongApiKey = 'ww7JkRrkC7DwPqaJDjNufvBKgdfC4ukHm';

let saleDepositInit = new Deposit();
saleDepositInit = {
  payment_uri: 'ethereum:0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
  address: '0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
  currency: 'ETH',
};

export const saleDeposit = saleDepositInit;

let saleFromInit = new InputAsset();
saleFromInit = {
  currency: 'ETH',
  amount: '10',
  amount_actual: '0',
};

export const saleFrom = saleFromInit;

let saleToInit = new OutputAsset();
saleToInit = {
  currency: 'ETH',
  amount: '10',
  amount_actual: '0',
};

export const saleTo = saleToInit;

let saleCustomerInit = new SaleOrderCustomer();
saleCustomerInit = {
  id: 'CLI-1024',
  name: 'Alex D.',
  email: 'mail@corp.com',
};

export const saleCustomer = saleCustomerInit;

let payoutFromInit = new PayoutInputAsset();
payoutFromInit = {
  currency: 'ETH',
  amount: '0.000001',
  amount_actual: '0',
};

export const payoutFrom = payoutFromInit;

let payoutToInit = new PayoutOutputAsset();
payoutToInit = {
  currency: 'ETH',
  amount: '0.000001',
  address: '0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
  amount_actual: '0',
};

export const payoutTo = payoutToInit;

let payoutNetworkFeeInit = new NetworkFee();
payoutNetworkFeeInit = {
  amount: '0.000000000000231',
  currency: 'ETH',
  rate: '1',
  withdrawal_currency: 'ETH',
  withdrawal_network: 'ethereum',
  withdrawal_chain: null,
  withdrawal_amount: '0.000000000000231',
};

export const payoutNetworkFee = payoutNetworkFeeInit;

let payoutCustomerInit = new PayoutOrderCustomer();
payoutCustomerInit = {
  id: 'CLI-1029293',
  name: 'New customer2',
  email: 'mail000442@corp.com',
};

export const payoutCustomer = payoutCustomerInit;

let saleResponseCustomerInit = new Customer();
saleResponseCustomerInit = {
  id: 1,
  email: 'mail000442@corp.com',
};

export const saleResponseCustomer = saleResponseCustomerInit;

export const saleSuccessRequest = {
  customer: saleCustomer,
  from: {
    currency: 'ETH',
  },
  to: {
    currency: 'ETH',
    amount: '10.00',
  },
  payment_id: 'PY-132s1z72ffssr1qq',
};

export const saleSuccessResponse = {
  order_id: 'e542ca94-59f4-42a1-90b9-f56d2eafdb7e',
  payment_id: 'PY-132s1z72ffssr1qq',
  type: 'sale',
  status: 'awaiting_payment',
  customer: saleResponseCustomer,
  from: saleFrom,
  to: saleTo,
  rate: '1',
  blockchain_url: 'https://etherscan.io/address/0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
  deposit: saleDeposit,
  order_expired_at: '1707917734',
};

export const forbiddenResponse = {
  statusCode: 403,
  message: 'Forbidden resource',
  error: 'Forbidden',
};

export const payoutSuccessRequest = {
  payment_id: 'CE344FC9-579E-43B3-x91k22-DFBdC10FAD9s3aA068',
  customer: payoutCustomer,
  from: {
    currency: 'ETH',
    amount: '0.000001',
  },
  to: {
    currency: 'ETH',
    address: '0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
  },
};

export const payoutSuccessResponse = {
  order_id: 'fec120a6-5d05-43e8-b8cf-b3e538aedc26',
  payment_id: 'CE344FC9-579E-43B3-x91k22-DFBdC10FAD9s3aA068',
  type: 'payout',
  status: 'new',
  customer: null,
  from: payoutFrom,
  to: payoutTo,
  rate: '1',
  blockchain_url: 'https://etherscan.io/address/0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
  network_fee: payoutNetworkFee,
};

export const orderListSuccessRequest = {
  type: 'payout',
  status: 'payed',
  offset: 1,
  limit: 2,
  dateStart: new Date('2024-01-23'),
  dateEnd: new Date('2024-02-14'),
};

export const orderListSuccessResponse = [
  {
    id: '3ae41a6e-32f0-416f-98a4-7268d77914bd',
    paymentId: 'CE344FC9-579E-43B3-x9122-DFBC10FAD9s3aA065',
    type: 'payout',
    status: 'payed',
    description: null,
    createdAt: '2024-01-23T13:38:38.000Z',
    currencyFrom: {
      code: 'ETH',
      amount: '0.0001',
      amountActual: '0.0001',
    },
    currencyTo: {
      code: 'ETH',
      amount: '0.0001',
      amountActual: '0.0001',
    },
    operations: [
      {
        type: 'payout',
        status: 'payed',
        createdAt: '2024-01-23T13:38:38.000Z',
        declineReason: null,
        currencyFrom: null,
        currencyTo: {
          code: 'ETH',
          amount: '0.0001',
          amountActual: '0.0001',
          address: '0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
          addressExtra: null,
        },
        rate: '1',
        networkFee: {
          currency: {
            code: 'ETH',
            amount: '0.000000000000315',
            amountActual: '0.000000000000315',
            rate: '1',
          },
          withdrawalCurrency: {
            code: 'ETH',
            network: 'ethereum',
            chain: null,
            amount: '0.000000000000315',
          },
        },
      },
    ],
  },
  {
    id: '0023b4a5-0cb0-4c5f-8c5c-2d6483f255f3',
    paymentId: 'CE344FC9-579E-43B3-x9122-DFBC10FAD9s3aA058',
    type: 'payout',
    status: 'payed',
    description: null,
    createdAt: '2024-01-23T12:05:10.000Z',
    currencyFrom: {
      code: 'ETH',
      amount: '0.0001',
      amountActual: '0.0001',
    },
    currencyTo: {
      code: 'ETH',
      amount: '0.0001',
      amountActual: '0.0001',
    },
    operations: [
      {
        type: 'payout',
        status: 'payed',
        createdAt: '2024-01-23T12:05:10.000Z',
        declineReason: null,
        currencyFrom: null,
        currencyTo: {
          code: 'ETH',
          amount: '0.0001',
          amountActual: '0.0001',
          address: '0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
          addressExtra: null,
        },
        rate: '1',
        networkFee: {
          currency: {
            code: 'ETH',
            amount: '0.000000000000294',
            amountActual: '0.000000000000294',
            rate: '1',
          },
          withdrawalCurrency: {
            code: 'ETH',
            network: 'ethereum',
            chain: null,
            amount: '0.000000000000294',
          },
        },
      },
    ],
  },
];

export const orderStatusSuccessRequest = 'e542ca94-59f4-42a1-90b9-f56d2eafdb7e';

export const orderStatusSuccessResponse = {
  order_id: 'e542ca94-59f4-42a1-90b9-f56d2eafdb7e',
  payment_id: 'PY-132s1z72ffssr1qq',
  type: 'sale',
  status: 'awaiting_payment',
  customer: null,
  from: {
    currency: 'ETH',
    amount: '10',
    amount_actual: '0',
  },
  to: {
    currency: 'ETH',
    amount: '10',
    amount_actual: '0',
  },
  rate: '1',
  blockchain_url: 'https://etherscan.io/address/0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
  deposit: {
    payment_uri: 'ethereum:0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
    address: '0x63c1bc22c26fd502e761a77a8d0b61afd43d8887',
    currency: 'ETH',
  },
  order_expired_at: '1707917733',
  crypto_amount_payed: '0',
  confirmation: [
    {
      hash: null,
      current: null,
      required: null,
    },
  ],
};
