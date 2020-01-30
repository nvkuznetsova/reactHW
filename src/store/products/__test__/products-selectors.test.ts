import {
  getCurrentState,
  getData,
  getDataLoading,
  getLoadingError,
} from '../products-selectors';

describe('Products Selectors', () => {
  const data = [
    { name: 'testProduct1' },
    { name: 'testProduct2' },
  ];
  const error = { error: { message: 'error' } };
  const setProductsState = (fields = {}) => ({
    products: {
      isLoading: false,
      error: '',
      data: [],
      ...fields
    }
  });
  const state = setProductsState({ data });

  it('should return ptoducts state', () => {
    expect(getCurrentState(state)).toEqual(state.products);
  });

  it('should return products data', () => {
    const currentState = getCurrentState(state);

    expect(getData(currentState)).toEqual(data);
  });

  it('should return loading state', () => {
    const currentState = getCurrentState(state);

    expect(getDataLoading(currentState)).toBeFalsy();
  });

  it('should return error state', () => {
    const errorState = setProductsState({ error })
    const currentState = getCurrentState(errorState);

    expect(getLoadingError(currentState)).toEqual(error);
  });
});