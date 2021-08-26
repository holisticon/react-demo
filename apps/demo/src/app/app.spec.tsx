import { render, renderWithStore } from '@holisticon/testing';
import { waitFor, within } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Main } from './app';
import { store } from './state/store';


describe('App', () => {

    it.each([
        ['Shopping Cart', 'Shopping Cart'],
        ['User Profile', 'User Profile'],
        ['Orders', 'Orders'],
    ])('when I click on %s a page with title %s opens', async (linkName, heading) => {
        const { getByRole  } = render(<Provider store={store}><MemoryRouter> <Main /></MemoryRouter></Provider>);
        const main = getByRole('main');

        const shoppingCartLink = within(main).getByRole('link', { name: new RegExp(linkName, 'i') });
        UserEvent.click(shoppingCartLink);

        await waitFor(() => {
            expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain(heading);
        });
    });

});
