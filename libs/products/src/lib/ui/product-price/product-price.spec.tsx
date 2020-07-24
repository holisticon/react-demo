import React from 'react';
import { render } from '@testing-library/react';

import ProductPrice from './product-price';

describe(' ProductPrice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductPrice />);
    expect(baseElement).toBeTruthy();
  });
});
