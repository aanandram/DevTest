import { CustomerType } from './customer-type.model';

export interface CustomerModel {
    customerId: number;
    name: string;
    type: CustomerType;
  }
