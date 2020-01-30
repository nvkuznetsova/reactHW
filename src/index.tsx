import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import './index.css';
import { routes } from './routes';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
