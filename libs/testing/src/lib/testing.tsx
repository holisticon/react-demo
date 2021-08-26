import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';


const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (<MemoryRouter children={children}></MemoryRouter>)
}


const StoreWrapper = ({ children, store }: PropsWithChildren<{ store: Store }>) => {
    return <Provider store={store}>
        <Wrapper children={children} />
    </Provider>
}

const customRender = (...[ui, options]: Parameters<typeof render>) =>
    render(ui, { wrapper: Wrapper, ...options })

const renderWithStore = (ui: Parameters<typeof render>[0], store: Store, options?: Parameters<typeof render>[1]) =>
    render(ui, { wrapper: ({ children }) => <StoreWrapper store={store} children={children} />, ...options })

export { customRender as render, renderWithStore };
