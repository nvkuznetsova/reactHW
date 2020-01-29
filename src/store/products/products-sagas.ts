import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getProducts } from '../../api/api';

import {
  ProductsActionTypes,
  productsLoadSuccess,
  productsLoadError,
} from './actions';

export function* fetchProducts() {
  try {
    const { data: products } = yield call(getProducts);
    yield put(productsLoadSuccess(products));
  } catch (error) {
    yield put(productsLoadError(error));
  }
}

export function* productsWatcher() {
  yield all([
    takeLatest(ProductsActionTypes.PRODUCTS_LOAD_START, fetchProducts),
  ]);
}