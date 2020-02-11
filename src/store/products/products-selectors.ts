import { Product } from 'src/domain/Product';
import { AppState } from '../app-state';
import { ProductsState } from './products-state';

export const getCurrentState = (state: AppState): ProductsState => state.products;
export const getData = (state: ProductsState): ReadonlyArray<Product> => state.data;
export const getDataLoading = (state: ProductsState): boolean => state.isLoading;
export const getLoadingError = (state: ProductsState): Error | string => state.error;
