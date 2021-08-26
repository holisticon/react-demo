import { render } from '@holisticon/testing';
import React from 'react';
import Homepage from './homepage';


describe(' Homepage', () => {
    const onSearch = jest.fn();

    it('should render successfully', () => {
        const { baseElement } = render(<Homepage onSearch={onSearch} />);
        expect(baseElement).toBeTruthy();
    });

});
