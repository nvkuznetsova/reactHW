import { ProductsState } from "./products/products-state";
import { CartState } from "./cart/cart-state";

export interface AppState {
  products: ProductsState;
  cart: CartState;
}
