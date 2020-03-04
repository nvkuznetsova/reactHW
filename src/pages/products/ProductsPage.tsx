import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React, { Component, ReactNode } from 'react';

import { badgeTexts } from 'src/constants/badgeTexts';
import { btnLabels } from 'src/constants/btnLabels';
import { Cart } from 'src/domain/Cart';
import { Product } from 'src/domain/Product';
import { CartActions } from 'src/store/cart/actions';
import { ProductsActions } from 'src/store/products/actions';
import { MainLayout } from 'src/components/MainLayout/MainLayout';
import { Button } from 'src/components/Button/Button';
import { 
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'src/components/Card';

const { available, unavailable } = badgeTexts;

export type ProductsProps = {
  products: ReadonlyArray<Product>,
  isLoading: boolean,
  error: Error | string,
  getProducts: () => ProductsActions,
  buyProduct: (cartItem: Cart) => CartActions,
};

export class ProductsPage extends Component<ProductsProps> {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  buyProductEvent(product: Product): void {
    const { buyProduct } = this.props;

    const cartItem: Cart = {
      ...product,
      count: 1,
    }
    buyProduct(cartItem);
  }

  renderCard(product: Product): ReactNode {
    const { isAvailable } = product;
    const cardClassName = isAvailable ? 'border-primary' : 'border-warning';

    return (
      <Card 
        cardClassName={cardClassName}
      > 
        { this.renderCardBody(product) }
      </ Card>
      )
  }

  renderCardBody(product: Product): ReactNode {
    const { name, isAvailable, price } = product;
    const badgeText = isAvailable ? available : unavailable;
    const badgeClassName = isAvailable ? 'badge-info' : 'badge-danger';
    const cardText = `Price: $${price}`;
    const btnType = isAvailable ? 'btn-primary' : 'btn-warning';
    const btnClassName = `w-100 ${btnType}`;

    return (
      <CardBody>
        <CardTitle 
          name={name.toLocaleUpperCase()}
          badgeText={badgeText}
          badgeClassName={badgeClassName} />
        <CardText cardText={cardText}/>
        <Button 
          btnLabel={btnLabels.buyButton}
          btnClassName={btnClassName}
          disabled={!isAvailable}
          click={this.buyProductEvent.bind(this, product)}
          />
      </CardBody>
    )
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
            return (
              <div
                className="col-lg-4 col-md-6 align-self-center"
                key={index}
              >
                {this.renderCard(product)}
              </div>
            )
          })}
        </div>
      </MainLayout>)
  }
}