import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { Cart } from 'src/domain/Cart';
import { AppState } from 'src/store/app-state';
import {
  getCurrentState,
  getCartItems,
  getTotal,
} from 'src/store/cart/cart-selectors';
import { cartAddItem, cartDeleteItem, cartRemoveItem } from 'src/store/cart/actions';
import { CartPage } from './CartPage';


const mapStateToProps = (state: AppState) => {
  const currentState = getCurrentState(state);

  return {
    cartItems: getCartItems(currentState),
    total: getTotal(currentState),
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addCartItem: (cartItem: Cart) => dispatch(cartAddItem(cartItem)),
    deleteCartItem: (cartItemId: number) => dispatch(cartDeleteItem(cartItemId)),
    removeCartItem: (cartItemId: number) => dispatch(cartRemoveItem(cartItemId)),
  }
};

export const CartPageContainer = connect(mapStateToProps, mapDispatchToProps)(CartPage);