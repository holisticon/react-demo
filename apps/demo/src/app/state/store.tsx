import {configureStore} from '@reduxjs/toolkit';
import { reducer as productsReducer } from '@holisticon/products';
import { reducer as shoppingCartReducer } from '@holisticon/shopping-cart';
import { reducer as userProfileReducer } from '@holisticon/user-profile';
import { reducer as ordersReducer } from '@holisticon/orders';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        shoppingCart: shoppingCartReducer,
        userProfile: userProfileReducer,
        orders: ordersReducer
    },
    devTools: true
})
