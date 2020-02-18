import React, { FC } from 'react';

import { Cart } from 'src/domain/Cart';
import { CartActions } from 'src/store/cart/actions';
import { MainLayout } from 'src/components/MainLayout/MainLayout';
import { Stepper } from 'src/components/Stepper';
import { List, ListItem } from 'src/components/List';
import { Button } from 'src/components/Button/Button';
import { Badge } from 'src/components/Badge/Badge';

import { EmptyCart } from './EmptyCart';
import './CartPage.styles.css';

type CartProps = {
  cartItems: ReadonlyArray<Cart>,
  total: number,
  addCartItem: (cartItem: Cart) => CartActions,
  deleteCartItem: (cartItemId: number) => CartActions,
  removeCartItem: (cartItemId: number) => CartActions,
};

export const CartPage: FC<CartProps> = props => {
  const {
    cartItems,
    addCartItem,
    deleteCartItem,
    removeCartItem,
    total,
  } = props;

  if (total === 0) {
    return (
      <EmptyCart />
    )
  }

  const totalText = `Total: $${total}`;

  return (
    <MainLayout>
      <div className="col-md-9 mx-auto">
        <List>
          {cartItems.map((item) => (
            <ListItem
              key={item.id}
              listItemClassName="d-flex flex-wrap justify-content-between align-items-center">
              <span className="cart-item-name">
                {item.name.toLocaleUpperCase()}
                <Badge
                  badgeClassName="badge-info"
                  badgeText={`$${item.price}`}
                />
              </span>
              <Stepper
                value={item.count}
                increment={() => addCartItem(item)}
                decrement={() => deleteCartItem(item.id)}
              />
              <Button
                btnClassName="btn-danger"
                btnLabel="X"
                click={() => removeCartItem(item.id)}
              />
            </ListItem>
          ))}
        </List>
        <div className="mt-2">
          <h4 className="text-info text-right">{totalText}</h4>
        </div>
      </div>
    </MainLayout>
  )
}