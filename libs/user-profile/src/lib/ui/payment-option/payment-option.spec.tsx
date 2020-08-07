import React from 'react';
import { render } from '@testing-library/react';

import PaymentOption from './payment-option';

describe(' PaymentOption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentOption />);
    expect(baseElement).toBeTruthy();
  });
});
