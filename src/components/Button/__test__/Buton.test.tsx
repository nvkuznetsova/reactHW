import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Button, ButtonProps } from '../Button';

describe('Button', () => {
  const getProps = (): ButtonProps => ({
    btnLabel: 'Button',
    btnClassName: 'btn-class',
    disabled: false,
    click: () => null,
  });
  const setup = (props = {}): ShallowWrapper => (
    shallow(<Button {...getProps()} {...props}/>)
  );

  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot()
  });

  it('should match snapshot if button disabled', () => {
    const component = setup({ disabled: true });
    expect(component).toMatchSnapshot()
  });
});