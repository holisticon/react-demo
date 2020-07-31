import { createSelector } from '@reduxjs/toolkit';
import { ProductsState } from './products-slice';
import { isNull, defaultTo } from 'lodash-es';

export const selectProductsState = (state: { products: ProductsState }) => {
    return state.products;
};

export const selectSearchResults = createSelector(
    selectProductsState,
    ({ searchResults, products }) => {
        if (isNull(searchResults)) {
            return null;
        }

        return {
            ...searchResults,
            products: searchResults.products
                .map(productUri => products[productUri])
        };
    }
)

export const selectProduct = createSelector(
    selectProductsState,
    (_: any, productUri: string) => productUri,
    (state, productUri) => defaultTo(state.products[productUri], null)
)
