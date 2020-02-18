import { Product } from "./Product";

export interface Cart extends Product {
  count: number;
}