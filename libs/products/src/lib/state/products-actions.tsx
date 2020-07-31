import { ResourceUri } from '@ngxp/resource';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadProduct, searchProducts } from './products-api';

export const searchProductsAction = createAsyncThunk(
    'products/SEARCH_PRODUCTS',
    async (queryString: string | null) => await searchProducts(queryString)
)

export const loadProductAction = createAsyncThunk(
    'products/LOAD_PRODUCT',
    async (productId: ResourceUri) => await loadProduct(productId)
)
