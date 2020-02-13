import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { CardTitle, CardTitleProps } from '../CardTitle';

describe('Card', () => {
  const getProps = (): CardTitleProps => ({
    name: 'test name',
    badgeText: 'test badge',
    badgeClassName: 'badge-class',
  });
  const setup = (): ShallowWrapper => shallow(<CardTitle {...getProps()} />);

  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot()
  });
});