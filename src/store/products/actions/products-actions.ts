import { Product } from '../../../domain/Product';
import {
  ProductsActionTypes, 
  ProductsActions,
} from './products-action-types';

export const productsLoadStart = (): ProductsActions => ({
  type: ProductsActionTypes.PRODUCTS_LOAD_START,
});

export const productsLoadSuccess = (products: Array<Product>): ProductsActions => ({
  type: ProductsActionTypes.PRODUCTS_LOAD_SUCCESS,
  products,
});

export const productsLoadError = (error: Error | string): ProductsActions => ({
  type: ProductsActionTypes.PRODUCTS_LOAD_ERROR,
  error,
});
