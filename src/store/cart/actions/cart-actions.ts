import { Cart } from 'src/domain/Cart';
import { CartActions, CartActionTypes } from './cart-action-types';

export const cartAddItem = (cartItem: Cart): CartActions => ({
  type: CartActionTypes.CART_ADD_ITEM,
  cartItem,
});

export const cartRemoveItem = (cartItemId: number): CartActions => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  cartItemId,
});

export const cartDeleteItem = (cartItemId: number): CartActions => ({
  type: CartActionTypes.CART_DELETE_ITEM,
  cartItemId,
});