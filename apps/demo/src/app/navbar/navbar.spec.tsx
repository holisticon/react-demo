import React from 'react';
import { render } from '@holisticon/testing';

import Navbar from './navbar';

describe(' Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
