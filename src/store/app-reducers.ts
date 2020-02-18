import { combineReducers } from 'redux';
import { productsReducer as products } from './products/products-reducer';
import { cartReducer as cart } from './cart/cart-reducer';

export const rootReducer = combineReducers({ products, cart });