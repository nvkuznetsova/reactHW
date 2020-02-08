import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';

import { Product } from 'src/domain/Product';

import { MainLayout } from '../../components/MainLayout/MainLayout';

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

    if (isLoading) {
      return <span>Loading</span>;
    }

    const hasError = !isLoading && !isEmpty(error);

    if (hasError) {
      const errorMessage = get(error, 'message', 'error');
      return <div>{errorMessage}</div>
    }

    return (
      <MainLayout>
        <div className="d-flex flex-wrap justify-content-evenly">
          {products.map((product, index) => {
            return <div className="col-md-3 align-self-center" key={index}>{product.name}</div>
          })}
        </div>
      </MainLayout>)
  }
}