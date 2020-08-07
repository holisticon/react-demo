import React from 'react';
import { render } from '@testing-library/react';

import UpdateQuantityForm from './update-quantity-form';

describe(' UpdateQuantityForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateQuantityForm />);
    expect(baseElement).toBeTruthy();
  });
});
