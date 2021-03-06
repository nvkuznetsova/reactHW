import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { productsWatcher } from './products/products-sagas';

const sagas = [
  productsWatcher,
];

export function* rootSaga(): SagaIterator {
  yield all(sagas.map(saga => fork(saga)));
}