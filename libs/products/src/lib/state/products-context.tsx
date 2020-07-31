import React, { createContext, Provider, useState, useReducer, ReducerAction } from 'react';
import { Product, SearchResults } from '../domain/product';
import { Resource, ResourceUri, ResourceMap, toMap, getUris } from '@ngxp/resource';
import { isNull } from 'lodash-es';

type Action<T = any> = T & {
    type: string;
}

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

export const reducer = (state: ProductsState, action: Action): ProductsState => {

    switch (action.type) {
        case 'PRODUCT_LOADED': {
            return {
                ...state,
                products: {
                    ...state.products,
                    ...toMap([action.product])
                }
            }
        }
        case 'SEARCH_RESULTS_LOADED': {
            return {
                ...state,
                searchResults: {
                    ...action.searchResults,
                    products: getUris(action.searchResults.products)
                },
                products: {
                    ...state.products,
                    ...toMap(action.searchResults.products)
                }
            }
        }
    }

    return state;
}

export const productLoadedAction = (product: Resource<Product>) => ({
    type: 'PRODUCT_LOADED',
    product
});

export const searchResultsLoadedAction = (searchResults: SearchResults) => ({
    type: 'SEARCH_RESULTS_LOADED',
    searchResults
});

export const ProductsContext = createContext({
    state: initialState,
    dispatch: (payload: any) => { }
});

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
}

export const selectSearchResults = () => ({ searchResults, products }: ProductsState) => {
    if (isNull(searchResults)) {
        return null;
    }

    return {
        ...searchResults,
        products: searchResults.products
            .map(productUri => products[productUri])
    };
}

export const selectProduct = (productUri: ResourceUri) => ({ products }: ProductsState) => {
    return products[productUri];
};
