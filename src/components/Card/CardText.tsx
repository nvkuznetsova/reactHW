import React from 'react';

type CardTextProps = {
  cardText: string,
};

export const CardText: React.FC<CardTextProps> = ({ cardText }) => (
  <p className="card-text">{cardText}</p>
);
