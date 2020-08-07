import React from 'react';
import { render } from '@testing-library/react';

import ShoppingCart from './shopping-cart';

describe(' ShoppingCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingCart />);
    expect(baseElement).toBeTruthy();
  });
});
