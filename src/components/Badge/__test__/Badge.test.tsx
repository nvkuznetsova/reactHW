import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Badge, BadgeProps } from '../Badge';

describe('Badge', () => {
  const getProps = (): BadgeProps => ({
    badgeText: 'badge',
    badgeClassName: 'class',
  });
  const setup = (): ShallowWrapper => shallow(<Badge {...getProps()} />);

  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot()
  });
});