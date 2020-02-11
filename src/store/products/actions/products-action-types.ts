import { Product } from 'src/domain/Product';

export enum ProductsActionTypes {
  PRODUCTS_LOAD_START = 'PRODUCTS_LOAD_START',
  PRODUCTS_LOAD_ERROR = 'PRODUCTS_LOAD_ERROR',
  PRODUCTS_LOAD_SUCCESS = 'PRODUCTS_LOAD_SUCCESS',
}

export interface ProductsLoadStart {
  type: typeof ProductsActionTypes.PRODUCTS_LOAD_START;
}

export interface ProductsLoadError {
  type: typeof ProductsActionTypes.PRODUCTS_LOAD_ERROR;
  error: Error | string;
}

export interface ProductsLoadSuccess {
  type: typeof ProductsActionTypes.PRODUCTS_LOAD_SUCCESS;
  products: Array<Product>;
}

export type ProductsActions = ProductsLoadStart 
  | ProductsLoadSuccess 
  | ProductsLoadError;