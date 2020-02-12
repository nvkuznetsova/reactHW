import React from 'react';

import { Badge } from 'src/components/Badge/Badge'

type CardTitleProps = {
  name: string,
  badgeText: string,
  badgeClassName: string,
};

export const CardTitle: React.FC<CardTitleProps> = ({ name, badgeText, badgeClassName }) => (
  <h4 className="card-title">
    {name}
    <Badge 
      badgeText={badgeText}
      badgeClassName={badgeClassName}
    />
  </h4>
);