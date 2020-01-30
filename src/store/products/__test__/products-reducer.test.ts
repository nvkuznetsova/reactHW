import { ProductsActionTypes, ProductsActions } from '../actions';

import { productsReducer } from '../products-reducer';

describe('ProductsReducer', () => {
  it('should return new state on PRODUCTS_LOAD_START', () => {
    const initState = {
      isLoading: false,
      error: '',
      data: [],
    }

    const action: ProductsActions = { type: ProductsActionTypes.PRODUCTS_LOAD_START };
    expect(productsReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
    });
  });

  it('should return new state on PRODUCTS_LOAD_SUCCESS', () => {
    const data = [
      {
        id: 1,
        name: 'apple',
        description: 'tasty',
        price: 1,
        category: 'fruits',
        isAvailable: true,
      }
    ];

    const prevState = {
      isLoading: true,
      error: '',
      data: [],
    }

    const newState = {
      ...prevState,
      isLoading: false,
      data,
    };

    const action: ProductsActions = { 
      type: ProductsActionTypes.PRODUCTS_LOAD_SUCCESS,
      products: [...data],
    }
    expect(productsReducer(prevState, action)).toEqual(newState);
  });

  it('should return new state on PRODUCTS_LOAD_ERROR', () => {
    const prevState = {
      isLoading: true,
      error: '',
      data: [],
    }

    const newState = {
      ...prevState,
      isLoading: false,
      error: 'error',
    };

    const action: ProductsActions = {
      type: ProductsActionTypes.PRODUCTS_LOAD_ERROR,
      error: 'error',
    };
    expect(productsReducer(prevState, action)).toEqual(newState);
  });

  it('should return propper state on PRODUCTS_LOAD_START after error', () => {
    const errorState = {
      isLoading: false,
      error: 'error',
      data: [],
    }

    const action: ProductsActions = { type: ProductsActionTypes.PRODUCTS_LOAD_START };
    expect(productsReducer(errorState, action)).toEqual({
      ...errorState,
      isLoading: true,
      error: '',
    });
  });
});