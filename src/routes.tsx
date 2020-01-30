import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import { ProductsPageContainer } from './pages/products';

export const routes = (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to={ROUTES.products} />
      <Route exact path={ROUTES.products} component={ProductsPageContainer} />
    </Switch>
  </BrowserRouter>
);
