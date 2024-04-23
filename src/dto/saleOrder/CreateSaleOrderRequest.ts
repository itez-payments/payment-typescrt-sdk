import { InputAsset } from './InputAsset';
import { OutputAsset } from './OutputAsset';
import { SaleOrderCustomer } from './SaleOrderCustomer';

export class CreateSaleOrderRequest {
  payment_id!: string;
  customer!: SaleOrderCustomer;
  from!: InputAsset;
  to!: OutputAsset;
  description?: string;
}
