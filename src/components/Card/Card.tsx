import React from 'react';

export type CardProps = {
  cardClassName: string,
};

export const Card: React.FC<CardProps> = ({ children, cardClassName }) => (
  <div className={`card mb-3 ${cardClassName}`}>
    {children}
  </div>
);