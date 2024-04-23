import { Customer } from './Customer';

export abstract class AbstractOrderResponse {
    order_id!: string;
    payment_id!: string;
    type!: string;
    customer?: Customer;
    rate!: string;
    blockchain_url?: string;
    status?: string;
}
