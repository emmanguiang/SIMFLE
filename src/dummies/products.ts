import { IStocks, IProductStock } from "../interfaces/istocks";
import { ProductCategory } from "../interfaces/iproduct";

export const Stocks: IStocks = {
  products: [
    {
      product: {
        sku: "P0001",
        capital: 100,
        srp: 150,
        name: "Product 1",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    },
    {
      product: {
        sku: "P0002",
        capital: 100,
        srp: 150,
        name: "Product 2",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    },
    {
      product: {
        sku: "P0003",
        capital: 100,
        srp: 150,
        name: "Product 3",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    },
    {
      product: {
        sku: "P0004",
        capital: 100,
        srp: 150,
        name: "Product 4",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    },
    {
      product: {
        sku: "P0005",
        capital: 100,
        srp: 150,
        name: "Product 5",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    },
    {
      product: {
        sku: "P0006",
        capital: 100,
        srp: 150,
        name: "Product 6",
        description: "Sample",
        category: ProductCategory.Sample
      },
      remaining: 10
    }
  ]
};
