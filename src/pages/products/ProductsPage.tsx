import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { Product } from '../../domain/Product';

type ProductsProps = {
  products: ReadonlyArray<Product>,
  isLoading: boolean,
  error: Error | string,
  getProducts: () => void,
};

export class ProductsPage extends Component<ProductsProps> {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    const {
      products,
      isLoading,
      error,
    } = this.props;
 
    return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {isLoading && <span>Loading</span>}
      {!isLoading && products.map((product, index) => {
      return <div className="col-md-3 align-self-center" key={index}>{product.name}</div>
      })}
      {!isLoading && !isEmpty(error) && <div>{get(error, 'message', 'error')}</div>}
    </div>)
  }
}