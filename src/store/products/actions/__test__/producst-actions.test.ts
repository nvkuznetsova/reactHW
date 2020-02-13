import { Product } from 'src/domain/Product';
import {
  ProductsActionTypes,
  productsLoadStart,
  productsLoadSuccess,
  productsLoadError,
 } from '..';

 describe('Products actions', () => {
   it('should return proper object on PRODUCTS_LOAD_START', () => {
     const result = { type: ProductsActionTypes.PRODUCTS_LOAD_START };

     expect(productsLoadStart()).toEqual(result);
   });

   it('should return proper object on PRODUCTS_LOAD_SUCCESS', () => {
     const products = [
       { name: 'product1' },
       { name: 'product2' },
     ] as Array<Product>;
     const result = {
       type: ProductsActionTypes.PRODUCTS_LOAD_SUCCESS,
       products,
     };

     expect(productsLoadSuccess(products)).toEqual(result);
  });

  it('should return proper object on PRODUCTS_LOAD_ERROR', () => {
     const error = { message: 'error' } as Error;
     const result = {
       type:ProductsActionTypes.PRODUCTS_LOAD_ERROR,
       error,
     };

     expect(productsLoadError(error)).toEqual(result);
  });
 });