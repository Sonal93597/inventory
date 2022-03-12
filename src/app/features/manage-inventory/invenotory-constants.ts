export class AddInventoryRequest {
name: string;
description: string;
dataSourceFormat: string;
businessOwner: string;
price: any;
}
export interface PeriodicElement {
  name: string;
  description: any;
  price: string;
  action?: any;
  id?: string;
}

