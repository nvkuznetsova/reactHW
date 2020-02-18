import { Cart } from 'src/domain/Cart';

export enum CartActionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_DELETE_ITEM = 'CART_DELETE_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  CART_CLEAR = 'CART_CLEAR',
}

export interface CartAddProduct {
  type: CartActionTypes.CART_ADD_ITEM;
  cartItem: Cart;
}

export interface CartDeleteProduct {
  type: CartActionTypes.CART_DELETE_ITEM;
  cartItemId: number;
}

export interface CartRemoveProduct {
  type: CartActionTypes.CART_REMOVE_ITEM;
  cartItemId: number;
}

export interface CartClear {
  type: CartActionTypes.CART_CLEAR;
}

export type CartActions = CartAddProduct 
  | CartDeleteProduct
  | CartRemoveProduct
  | CartClear;