import { IProduct, ProductCategory } from "./iproduct";

export interface IStocks {
  products: IProductStock[];
}

export interface IProductStock {
  product: IProduct;
  remaining: number;
}
