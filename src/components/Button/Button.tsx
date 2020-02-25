import React from 'react';

import './Button.styles.css';

export type ButtonProps = {
  btnLabel: string,
  btnClassName: string,
  disabled: boolean,
  click: () => void,
};

export const Button: React.FC<ButtonProps> = ({ 
  btnLabel,
  btnClassName,
  disabled,
  click,
}) => (
  <button
    className={`btn ${btnClassName}`}
    disabled={disabled}
    onClick={click}
    >
      {btnLabel}
    </button>
);