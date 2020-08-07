import {configureStore} from '@reduxjs/toolkit';
import { reducer as productsReducer } from '@ngxp/products';
import { reducer as shoppingCartReducer } from '@ngxp/shopping-cart';
import { reducer as userProfileReducer } from '@ngxp/user-profile';
import { reducer as ordersReducer } from '@ngxp/orders';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        shoppingCart: shoppingCartReducer,
        userProfile: userProfileReducer,
        orders: ordersReducer
    },
    devTools: true
})
