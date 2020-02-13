import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Card, CardProps } from '../Card';

describe('Card', () => {
  const getProps = (): CardProps => ({
    cardClassName: 'card-class', 
  });
  const setup = (props = {}): ShallowWrapper => shallow(<Card {...getProps()} {...props} />);

  it('should match snapshot', () => {
    const children = <div>Card Body</div>
    const component = setup({ children });
    expect(component).toMatchSnapshot()
  });
});