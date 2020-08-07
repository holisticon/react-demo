import { getUris, ResourceMap, ResourceUri, toMap } from '@ngxp/resource';
import { createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../domain/product';
import { searchProducts, loadProduct } from './products-api';

const sliceName = 'products';

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

export const searchProductsAction = createAsyncThunk(
    `${sliceName}/SEARCH_PRODUCTS`,
    async (queryString: string | null) => await searchProducts(queryString)
);

export const loadProductAction = createAsyncThunk(
    `${sliceName}/LOAD_PRODUCT`,
    async (productId: ResourceUri) => await loadProduct(productId)
);

const productsSlice = createSlice({
    reducers: {},
    initialState,
    name: sliceName,
    extraReducers: builder => builder
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
});

export const { reducer } = productsSlice;
