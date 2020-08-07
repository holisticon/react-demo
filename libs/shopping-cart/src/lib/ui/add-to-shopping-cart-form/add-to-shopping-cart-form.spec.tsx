import React from 'react';
import { render } from '@testing-library/react';

import AddToShoppingCartForm from './add-to-shopping-cart-form';

describe(' AddToShoppingCartForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddToShoppingCartForm />);
    expect(baseElement).toBeTruthy();
  });
});
