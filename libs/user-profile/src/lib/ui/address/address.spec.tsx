import React from 'react';
import { render } from '@testing-library/react';

import Address from './address';

describe(' Address', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Address />);
    expect(baseElement).toBeTruthy();
  });
});
