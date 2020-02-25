import React, { FC } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { Icon } from '../Icon';
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
      <Icon icon={faMinus} />
    </span>
    <span>{value}</span>
   <span
     data-marker="increment"
     onClick={increment}
    >
     <Icon icon={faPlus} />
   </span>
  </div>
);