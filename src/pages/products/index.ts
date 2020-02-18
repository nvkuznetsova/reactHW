import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { Cart } from 'src/domain/Cart';
import { cartAddItem, CartActions } from 'src/store/cart/actions';
import { AppState } from 'src/store/app-state';
import { productsLoadStart, ProductsActions } from 'src/store/products/actions';
import {
  getCurrentState,
  getData,
  getDataLoading,
  getLoadingError,
} from 'src/store/products/products-selectors';
import { ProductsPage } from './ProductsPage';

const mapStateToProps = (state: AppState) => {
  const currentState = getCurrentState(state);

  return {
    products: getData(currentState),
    isLoading: getDataLoading(currentState),
    error: getLoadingError(currentState),
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    getProducts: (): ProductsActions => dispatch(productsLoadStart()),
    buyProduct: (cartItem: Cart): CartActions => dispatch(cartAddItem(cartItem)),
  };
};

export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);