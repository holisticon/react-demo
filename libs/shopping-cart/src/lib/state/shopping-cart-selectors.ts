import { ShoppingCartState } from './shopping-cart-slice';
import { createSelector } from '@reduxjs/toolkit';

export const selectShoppingCartState = (state: { shoppingCart: ShoppingCartState }) => {
    return state.shoppingCart;
};

export const selectShoppingCart = createSelector(
    selectShoppingCartState,
    state => state.shoppingCart
);
