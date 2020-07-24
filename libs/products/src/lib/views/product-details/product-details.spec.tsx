import React from 'react';
import { render } from '@testing-library/react';

import ProductDetails from './product-details';

describe(' ProductDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductDetails />);
    expect(baseElement).toBeTruthy();
  });
});
