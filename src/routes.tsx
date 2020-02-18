import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import { ProductsPageContainer } from './pages/products';
import { CartPageContainer } from './pages/cart';

const routes = (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to={ROUTES.products} />
      <Route exact path={ROUTES.products} component={ProductsPageContainer} />
      <Route exact 
        path={ROUTES.cart} component={CartPageContainer}/>
    </Switch>
  </BrowserRouter>
);

export default routes;
