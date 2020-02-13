import React from 'react';

export type CardTextProps = {
  cardText: string,
};

export const CardText: React.FC<CardTextProps> = ({ cardText }) => (
  <p className="card-text">{cardText}</p>
);
