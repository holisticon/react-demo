import React from 'react';
import { render } from '@testing-library/react';

import ShoppingCartItemList from './shopping-cart-item-list';

describe(' ShoppingCartItemList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingCartItemList />);
    expect(baseElement).toBeTruthy();
  });
});
