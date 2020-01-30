import { SagaIterator } from 'redux-saga';
import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getProducts } from '../../api/api';

import {
  ProductsActionTypes,
  productsLoadSuccess,
  productsLoadError,
} from './actions';

export function* fetchProducts(): SagaIterator {
  try {
    const { data: products } = yield call(getProducts);
    yield put(productsLoadSuccess(products));
  } catch (error) {
    yield put(productsLoadError(error));
  }
}

export function* productsWatcher(): SagaIterator {
  yield all([
    takeLatest(ProductsActionTypes.PRODUCTS_LOAD_START, fetchProducts),
  ]);
}