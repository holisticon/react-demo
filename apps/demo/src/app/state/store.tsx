import {configureStore} from '@reduxjs/toolkit';
import { reducer } from '@ngxp/products';

export const store = configureStore({
    reducer: {
        products: reducer
    },
    devTools: true
})
