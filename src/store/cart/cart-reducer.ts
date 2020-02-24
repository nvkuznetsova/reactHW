import { findItemById, filterArrayByItemId } from "src/utils/items";
import { CartActions, CartActionTypes } from "./actions";
import { initialState, CartState } from "./cart-state";

export const cartReducer = (
  state = initialState,
  action: CartActions,
  ): CartState => {
  switch(action.type) {
    case CartActionTypes.CART_ADD_ITEM: 
      const existedItem = findItemById(state.cartItems, action.cartItem.id);
      if (existedItem) {
        existedItem.count += 1;

        return {
          ...state,
          total: state.total + existedItem.price,
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem],
        total: state.total + action.cartItem.price,
      }

      case CartActionTypes.CART_DELETE_ITEM: 
      const item = findItemById(state.cartItems, action.cartItemId);
      item!.count -= 1;
      if (item!.count === 0) {
        const cartItems = filterArrayByItemId(state.cartItems, action.cartItemId);

        return {
          ...state,
          cartItems: [...cartItems],
          total: state.total - item!.price,
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        total: state.total - item!.price,
      }

    case CartActionTypes.CART_REMOVE_ITEM:
      const cartItems = filterArrayByItemId(state.cartItems, action.cartItemId);
      const total = cartItems.reduce((sum, item) => sum += item.price * item.count, 0);

      return {
        ...state,
        cartItems: [...cartItems],
        total,
      }

      case CartActionTypes.CART_CLEAR: 
        return initialState

    default: return state;
  }
}