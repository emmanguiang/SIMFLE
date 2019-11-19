interface Products {}

export interface IProduct {
  sku: string;
  capital: number;
  srp: number;
  name: string;
  description: string;
  category: ProductCategory;
}

export enum ProductCategory {
  Sample = 1
}
