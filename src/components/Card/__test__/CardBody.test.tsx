import React from 'react';
import { shallow } from 'enzyme';

import { CardBody } from '..';

describe('Card', () => {
  const children = <div>Card Text</div>
  const component = shallow(<CardBody>{children}</CardBody>);

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot()
  });
});