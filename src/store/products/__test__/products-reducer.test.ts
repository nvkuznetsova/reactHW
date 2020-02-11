import { ProductsActionTypes, ProductsActions } from '../actions';
import { productsReducer } from '../products-reducer';
import { ProductsState, initialState } from '../products-state';

describe('ProductsReducer', () => {
  const setState = (fields = {}): ProductsState => ({
    ...initialState,
    ...fields,
  });

  describe('PRODUCTS_LOAD_START', () => {
    const initState = setState();
    const errorState = setState({ error: 'error' });

    const action: ProductsActions = { type: ProductsActionTypes.PRODUCTS_LOAD_START };

    it('should return new state on PRODUCTS_LOAD_START', () => {
      expect(productsReducer(initState, action)).toEqual({
        ...initState,
        isLoading: true,
      });
    });

    it('should return propper state on PRODUCTS_LOAD_START after error', () => {
      expect(productsReducer(errorState, action)).toEqual({
        ...errorState,
        isLoading: true,
        error: '',
      });
    });
  });

  describe('PRODUCTS_LOAD_SUCCESS', () => {
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

    const prevState = setState({ isLoading: true });

    const newState = setState({ data });

    const action: ProductsActions = { 
      type: ProductsActionTypes.PRODUCTS_LOAD_SUCCESS,
      products: [...data],
    }

    it('should return new state on PRODUCTS_LOAD_SUCCESS', () => {
      expect(productsReducer(prevState, action)).toEqual(newState);
    });
  });

  describe('PRODUCTS_LOAD_ERROR', () => {
    const prevState = setState({ isLoading: true });

    const newState = setState({ error: 'error' });

    const action: ProductsActions = {
      type: ProductsActionTypes.PRODUCTS_LOAD_ERROR,
      error: 'error',
    };

    it('should return new state on PRODUCTS_LOAD_ERROR', () => {
      expect(productsReducer(prevState, action)).toEqual(newState);
    });
  });
});