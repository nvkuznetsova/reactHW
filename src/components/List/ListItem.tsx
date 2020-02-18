import React, { FC } from 'react';

export type ListItemProps = {
  listItemClassName?: string,
};

export const ListItem: FC<ListItemProps> = ({ children, listItemClassName }) => (
  <li 
    className={`list-group-item ${listItemClassName}`}>
    {children}
  </li>
);