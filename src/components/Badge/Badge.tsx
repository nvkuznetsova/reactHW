import React from 'react';

export type BadgeProps = {
  badgeText: string,
  badgeClassName: string,
};

export const Badge: React.FC<BadgeProps> = ({ badgeText, badgeClassName }) => (
  <span className={`badge badge-pill ml-1 ${badgeClassName}`}>{badgeText}</span>
);