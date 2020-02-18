import { AppState } from "../app-state";
import { CartState } from "./cart-state";
import { Cart } from "src/domain/Cart";

export const getCurrentState = (state: AppState): CartState => state.cart;
export const getCartItems = (state: CartState): ReadonlyArray<Cart> => state.cartItems;
export const getTotal = (state: CartState): number => state.total;