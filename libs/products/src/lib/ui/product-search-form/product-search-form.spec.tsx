import React from 'react';
import { render } from '@testing-library/react';

import ProductSearchForm from './product-search-form';

describe(' ProductSearchForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductSearchForm />);
    expect(baseElement).toBeTruthy();
  });
});
