import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { CardText, CardTextProps } from '../CardText';

describe('Card', () => {
  const getProps = (): CardTextProps => ({
    cardText: 'test',
  });
  const setup = (): ShallowWrapper => shallow(<CardText {...getProps()} />);

  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot()
  });
});