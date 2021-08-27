import { configureStore, Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { defaultTo, identity } from 'lodash-es';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

type RenderParameters = Parameters<typeof render>;
type RenderReturnType = ReturnType<typeof render>

type Options = {
    store?: Store
}

const createWrapper = ({ store }: Options) => ({ children }: PropsWithChildren<{}>) => (
    <Provider store={defaultTo(store, noopStore)}>
        <MemoryRouter>{children}</MemoryRouter>
    </Provider>
);

const noopStore = configureStore({
    reducer: identity
});

const customRender = (
    ui: RenderParameters[0],
    options: Options = {},
    renderOptions?: RenderParameters[1]
): RenderReturnType => {
    const wrapper = createWrapper(options);
    return render(ui, { wrapper, ...renderOptions })
}

export { customRender as render };

