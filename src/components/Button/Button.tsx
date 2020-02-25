import React from 'react';

import './Button.styles.css';

export type ButtonProps = {
  btnLabel?: string,
  btnClassName: string,
  disabled?: boolean,
  click: (prop?: any) => void,
};

export const Button: React.FC<ButtonProps> = ({ 
  btnLabel = "",
  btnClassName,
  disabled = false,
  click,
  children,
}) => (
  <button
    className={`btn ${btnClassName}`}
    disabled={disabled}
    onClick={click}
    >
      {btnLabel}
      {children}
    </button>
);