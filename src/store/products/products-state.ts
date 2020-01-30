import { Product } from "../../domain/Product";


export interface ProductsState {
  data: ReadonlyArray<Product>;
  isLoading: boolean;
  error: Error | string;
}

export const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: '',
}