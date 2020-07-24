import React from 'react';
import { render } from '@testing-library/react';

import ProductListEntry from './product-list-entry';

describe(' ProductListEntry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductListEntry />);
    expect(baseElement).toBeTruthy();
  });
});
