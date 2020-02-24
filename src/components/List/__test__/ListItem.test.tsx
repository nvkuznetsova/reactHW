import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from '..';

describe('ListItem', () => {
  it('should match snapshot', () => {
    const children = <span>Test</span>;
    const component = shallow(<ListItem>{children}</ListItem>);

    expect(component).toMatchSnapshot();
  });
});