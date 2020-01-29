import { ProductsActionTypes, ProductsActions} from './actions';
import { ProductsState, initialState } from './products-state';

export const productsReducer = (state = initialState, action: ProductsActions): ProductsState => {
  switch(action.type) {
    case ProductsActionTypes.PRODUCTS_LOAD_START: 
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case ProductsActionTypes.PRODUCTS_LOAD_ERROR: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case ProductsActionTypes.PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.products,
        isLoading: false,
      }
    default: return state;
  }
}