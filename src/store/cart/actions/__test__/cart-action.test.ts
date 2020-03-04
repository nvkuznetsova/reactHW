import { cartAddItem, CartActionTypes, CartAddProduct } from "..";
import { Cart } from "src/domain/Cart";

describe('Cart Actions', () => {
  it('should return correct action on `CART_ADD_ITEM`', () => {
    const cartItem = {} as Cart;
    const action: CartAddProduct = {
      type: CartActionTypes.CART_ADD_ITEM,
      cartItem,
    }

    expect(cartAddItem(cartItem)).toEqual(action);
  });
});