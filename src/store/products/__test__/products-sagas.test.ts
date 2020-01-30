import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { ProductsActionTypes, ProductsActions } from '../actions';
import { productsReducer } from '../products-reducer';
import { initialState } from '../products-state';

import * as api from '../../../api/api';

import { fetchProducts } from '../products-sagas';

describe('Products Sagas', () => {
  const action: ProductsActions = { type: ProductsActionTypes.PRODUCTS_LOAD_START };

  it('should load products and handle it if success', async() => {
    const mockData = {
      data: [
        { name: 'testProduct1' },
        { name: 'testProduct2' },
      ]
    };

    const saga = expectSaga(fetchProducts)
      .provide([
        [call(api.getProducts), mockData],
      ])
      .withReducer(productsReducer, initialState)

      const result = await saga.dispatch(action).run();
      expect(result.storeState.data).toEqual(mockData.data)
  });

  it('should handle error it if load fail', async() => {
    const mockError = { message: 'error' } as Error;

    const saga = expectSaga(fetchProducts)
      .provide([
        [call(api.getProducts), throwError(mockError)],
      ])
      .withReducer(productsReducer, initialState)

      const result = await saga.dispatch(action).run();
      expect(result.storeState.error).toEqual(mockError);
  });
});