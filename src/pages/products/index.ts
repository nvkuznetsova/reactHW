import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { AppState } from '../../store/app-state';
import { ProductsPage } from './ProductsPage';
import { productsLoadStart } from '../../store/products/actions';

const mapStateToProps = (state: AppState) => ({
  products: state.products.data,
  isLoading: state.products.isLoading,
  error: state.products.error,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    getProducts: () => dispatch(productsLoadStart()),
  };
};

export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);