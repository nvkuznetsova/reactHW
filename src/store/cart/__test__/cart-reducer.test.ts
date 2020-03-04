import { CartState } from "../cart-state";
import { cartReducer } from '../cart-reducer';
import { CartActionTypes, CartAddProduct } from "../actions";
import { Cart } from "src/domain/Cart";

describe('Cart Reducer', () => {
  const setState = (fields = {}): CartState => ({
    cartItems: [],
    total: 0,
    ...fields,
  });

  describe('CART_ADD_ITEM', () => {
    const initState = setState();
    const cartItem = { count: 1, price: 1 } as Cart;

    const action: CartAddProduct = {
      type: CartActionTypes.CART_ADD_ITEM,
      cartItem,
    };

    it('should add item to card', () => {
      const newState = setState({ cartItems: [cartItem], total: 1 });

      const state = cartReducer(initState, action);
      expect(state).toEqual(newState);
    });

    it('should update item count', () => {
      const prevState = setState({ cartItems: [cartItem], total: 1 });
      const updatedItem = {
        ...cartItem,
        count: 2,
      };
      const newState = setState({ cartItems: [updatedItem], total: 2 });

      const state = cartReducer(prevState, action);
      expect(state).toEqual(newState);
    });
  });


});