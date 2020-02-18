import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes';
import './MainLayout.styles.css';

export const MainLayout: React.FC = ({ children }) => (
  <div className="container-fluid">
    <header className="main-header">
      <Link to={ROUTES.cart} className="btn btn-success">Cart</Link>
    </header>
    <section className="main-content">
      {children}
    </section>
  </div>
);