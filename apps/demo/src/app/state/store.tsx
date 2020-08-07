import {configureStore} from '@reduxjs/toolkit';
import { reducer as productsReducer } from '@ngxp/products';
import { reducer as shoppingCartReducer } from '@ngxp/shopping-cart';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        shoppingCart: shoppingCartReducer
    },
    devTools: true
})
