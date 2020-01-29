import React, { Component } from 'react';
import { Product } from '../../domain/Product';

type ProductsProps = {
  products: ReadonlyArray<Product>,
  isLoading: boolean,
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
    } = this.props;
    return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {isLoading && <span>Loading</span>}
      {!isLoading && products.map((product, index) => {
      return <div className="col-md-3 align-self-center" key={index}>{product.name}</div>
      })}
    </div>)
  }
}