import React, { FC } from 'react';

export type ListProps = {
  listClassName?: string,
};

export const List: FC<ListProps> = ({ children, listClassName='' }) => (
  <ul className={`list-group ${listClassName}`}>
    {children}
  </ul>
);