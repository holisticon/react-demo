import React from 'react';
import { render } from '@testing-library/react';

import ShoppingCartItemRow from './shopping-cart-item-row';

describe(' ShoppingCartItemRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoppingCartItemRow />);
    expect(baseElement).toBeTruthy();
  });
});
