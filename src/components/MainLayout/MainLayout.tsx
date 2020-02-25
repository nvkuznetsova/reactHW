import React from 'react';

import './MainLayout.styles.css';

export const MainLayout: React.FC = ({ children }) => (
  <div className="container-fluid">
    <header className="main-header"></header>
    <section className="main-content">
      {children}
    </section>
  </div>
);