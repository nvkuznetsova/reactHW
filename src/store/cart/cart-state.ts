import { Cart } from "src/domain/Cart";

export interface CartState {
  cartItems: ReadonlyArray<Cart>;
  total: number;
}

export const initialState: CartState = {
  cartItems: [],
  total: 0,
}