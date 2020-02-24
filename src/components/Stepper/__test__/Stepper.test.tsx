import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Stepper, StepperProps } from '..';

describe('Stepper', () => {
  const increment = jest.fn();
  const decrement = jest.fn();
  const getProps = (): StepperProps => ({
    value: 1,
    increment,
    decrement,
  });
  const setup = (props = {}): ShallowWrapper => (
    shallow(<Stepper {...getProps()} {...props}/>)
  );

  afterEach(jest.clearAllMocks);
  
  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot()
  });

  it('should call increment on click', () => {
    const component = setup();
    const incrementBtn = component.find('[data-marker="increment"]');
    incrementBtn.simulate('click');
    expect(increment).toBeCalled();
  });

  it('should call decrement on click', () => {
    const component = setup();
    const decrementBtn = component.find('[data-marker="decrement"]');
    decrementBtn.simulate('click');
    expect(decrement).toBeCalled();
  });
});