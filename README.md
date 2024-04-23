# Itez Payments Typescript SDK

This is a set of libraries in the Typescript language to ease integration of your service with the Itez Payments.

## Installation

Install with npm/yarn
```bash
npm install itez-payments/payments-sdk-ts
or
yarn add itez-payments/payments-sdk-ts
```


### Examples
```typescript
import * as sdk from 'itez-payments/payments-sdk-ts';

const paymentService = new sdk.PaymentService('host', 'privateKey', 'apiKey');

```

### Sale
```typescript

const saleRequest = new sdk.CreateSaleOrderRequest();
saleRequest.payment_id = 'Unique payment id';
saleRequest.customer = {
    name: 'Customer Name',
    email: 'Customer Email',
};
saleRequest.from = {
    currency: 'ETH',
};
saleRequest.to = {
    currency: 'ETH',
    amount: '0.01149069',
};

const saleResponse = await paymentService.saleOrderCreate(saleRequest);

```

### Payout
```typescript
const payoutRequest = new sdk.CreatePayoutOrderRequest();
payoutRequest.payment_id = Math.random().toString();
payoutRequest.customer = {
    name: 'Customer Name',
    email: 'Customer Email',
};
payoutRequest.from = {
    currency: 'ETH',
};
payoutRequest.to = {
    currency: 'ETH',
    amount: '0.0001',
    address: '0x17Ab2209F74cE2995f1AeE1E4e9915775b5b2A66',
};

const payoutResponse = await paymentService.payoutOrderCreate(payoutRequest);

```

### Get balance by project
```typescript
const balanceResponse = await paymentService.balanceRequest('ETH');

```

### Get Order List
```typescript
const listOrderRequest = new ListOrderRequest();

listOrderRequest.limit = 10;
listOrderRequest.offset = 0;
listOrderRequest.dateStart = new Date("2022-09-16 23:59:35");
listOrderRequest.dateEnd = new Date("2024-09-16 23:59:35");

const listOrerResponse = await paymentService.listOrderRequest(listOrderRequest);

```

### Get Order Status
```typescript
const orderId = '42f70799-a1f1-4a66-bd05-79485255fb84';
const statusResponse = await paymentService.statusOrderRequest(orderId);

```
