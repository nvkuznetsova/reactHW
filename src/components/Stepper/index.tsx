import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import './Stepper.styles.css';

export type StepperProps = {
  value: number;
  increment: (prop?: any) => void;
  decrement: (prop?: any) => void;
};

export const Stepper: FC<StepperProps> = ({ value, increment, decrement }) => (
  <div className="stepper border-primary text-primary">
    <span 
      data-marker="decrement"  
      onClick={decrement}
    >
      <FontAwesomeIcon icon={faMinus} />
    </span>
    <span>{value}</span>
   <span
     data-marker="increment"
     onClick={increment}
    >
     <FontAwesomeIcon icon={faPlus} />
   </span>
  </div>
);