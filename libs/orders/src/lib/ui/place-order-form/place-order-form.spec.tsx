import React from 'react';
import { render } from '@testing-library/react';

import PlaceOrderForm from './place-order-form';

describe(' PlaceOrderForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlaceOrderForm />);
    expect(baseElement).toBeTruthy();
  });
});
