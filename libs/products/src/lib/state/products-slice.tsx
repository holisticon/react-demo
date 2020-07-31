import { getUris, ResourceMap, ResourceUri, toMap } from '@ngxp/resource';
import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../domain/product';
import { loadProductAction, searchProductsAction } from './products-actions';


export interface ProductsState {
    query: string | null;
    searchResults: {
        products: ResourceUri[];
        totalResults: number;
    } | null;
    products: ResourceMap<Product>;
}

export const initialState: ProductsState = {
    query: null,
    searchResults: null,
    products: {},
};

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(searchProductsAction.pending, (state) => {
            state.searchResults = null;
        })
        .addCase(searchProductsAction.fulfilled, (state, action) => {
            state.searchResults = {
                ...action.payload,
                products: getUris(action.payload.products)
            };

            state.products = {
                ...state.products,
                ...toMap(action.payload.products)
            };
        })
        .addCase(loadProductAction.fulfilled, (state, action) => {
            state.products[action.payload._id] = action.payload;
        }),
);
