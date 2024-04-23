export class CurrencyAmountItemResponse {
    code!: string;
    network?: string | null;
    amount?: string;
    amountActual?: string;
    rate?: string;
    address?: string;
    addressExtra?: string;
}

export class NetworkFeeItemResponse {
    currency!: CurrencyAmountItemResponse;
    withdrawalCurrency?: CurrencyAmountItemResponse;
}

export class ListOperationResponse {
    type!: string;
    status!: string;
    currencyFrom?: CurrencyAmountItemResponse | null;
    currencyTo?: CurrencyAmountItemResponse | null;
    declineReason?: string | null;
    networkFee?: NetworkFeeItemResponse | null;
    createdAt!: string;
}

export class ListOrderResponse {
    id!: string;
    paymentId!: string;
    type!: string;
    status!: string;
    description!: string;
    currencyFrom!: CurrencyAmountItemResponse;
    currencyTo!: CurrencyAmountItemResponse;
    operations!: ListOperationResponse[];
    createdAt!: string;
}
