import React from 'react';
import { shallow } from 'enzyme';

import { List } from '..';

describe('List', () => {
  it('should match snapshot', () => {
    const children = <li>Test</li>;
    const component = shallow(<List>{children}</List>);

    expect(component).toMatchSnapshot();
  });
});