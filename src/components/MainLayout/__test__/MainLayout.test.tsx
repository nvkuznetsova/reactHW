import React from 'react';
import { shallow } from 'enzyme';

import { MainLayout } from '../MainLayout';

describe('MainLayout', () => {
  it('should match snapshot', () => {
    const children = <span>Test</span>;
    const component = shallow(<MainLayout>{children}</MainLayout>);

    expect(component).toMatchSnapshot()
  });
});