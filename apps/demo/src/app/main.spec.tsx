import { render } from '@holisticon/testing';
import { screen, within } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import React from 'react';
import Main from './main';
import { store } from './state/store';

describe('App', () => {
    it('greets you', async () => {
        render(<Main />, { store });

        expect((await screen.findByRole('heading', { level: 1 })).textContent).toContain('Welcome');
    });

    it.each([
        ['Shopping Cart', 'Shopping Cart'],
        ['User Profile', 'User Profile'],
        ['Orders', 'Orders'],
    ])('when I click on %s a page with title %s opens', async (link, heading) => {
        render(<Main />, { store });
        const main = screen.getByRole('main');
        const shoppingCartLink = await within(main).findByRole('link', { name: link });

        UserEvent.click(shoppingCartLink);

        expect((await within(main).findByRole('heading', { level: 1 })).textContent).toContain(heading);
    });

});
