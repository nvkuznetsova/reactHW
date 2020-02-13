import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { AppState } from '../../store/app-state';
import { ProductsPage } from './ProductsPage';
import { productsLoadStart } from '../../store/products/actions';
import {
  getCurrentState,
  getData,
  getDataLoading,
  getLoadingError,
} from '../../store/products/products-selectors';

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
    getProducts: () => dispatch(productsLoadStart()),
  };
};

export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);