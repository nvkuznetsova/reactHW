import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { ProductsPage, ProductsProps } from '../ProductsPage';

describe('ProductsPage', () => {
  const product = {
    id: 1,
    name: "apple",
    description: "tasty",
    price: 1,
    category: "fruits",
    isAvailable: true,
  };
  const getProps = (): ProductsProps => ({
    products: [product],
    isLoading: false,
    error: '',
    getProducts: jest.fn(),
    buyProduct: jest.fn(),
  });

  const setup = (props = {}): ShallowWrapper => (
    shallow(<ProductsPage {...getProps()} {...props}/>)
  );

  it('should match snapshot', () => {
    const component = setup();
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot on loading', () => {
    const component = setup({ isLoading: true });
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot on error', () => {
    const component = setup({ error: 'error' });
    expect(component).toMatchSnapshot();
    expect(component.find('div').text()).toBe('error');
  });

  it('should call `getProducts` on mount', () => {
    const getProducts =  jest.fn();
    setup({ getProducts });

    expect(getProducts).toHaveBeenCalled();
  });
});