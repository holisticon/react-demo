import { ResourceWith } from '@holisticon/resource';
import { createAsyncThunk, createSlice, AnyAction } from '@reduxjs/toolkit';
import { AdditionToShoppingCart, QuantityUpdate, ShoppingCart, ShoppingCartItem } from '../domain/shopping-cart';
import { addToShoppingCart, deleteShoppingCartItem, loadShoppingCart, updateShoppingCartItemQuantity } from './shopping-cart-api';
import { placeOrderAction } from '@holisticon/orders';

const sliceName = 'shoppingCart';

export interface ShoppingCartState {
    shoppingCart: ShoppingCart | null
}

export const initialState: ShoppingCartState = {
    shoppingCart: null
};

export const loadShoppingCartAction = createAsyncThunk(
    `${sliceName}/LOAD_SHOPPING_CART`,
    async () => await loadShoppingCart()
);

export const updateShoppingCartItemQuantityAction = createAsyncThunk(
    `${sliceName}/UPDATE_SHOPPING_CART_QUANTITY`,
    async (quantityUpdate: ResourceWith<QuantityUpdate>) => await updateShoppingCartItemQuantity(quantityUpdate.resource, quantityUpdate.with)
);

export const deleteShoppingCartItemAction = createAsyncThunk(
    `${sliceName}/DELETE_SHOPPING_CART_ITEM`,
    async (shoppingCartItem: ShoppingCartItem) => await deleteShoppingCartItem(shoppingCartItem)
);

export const addToShoppingCartAction = createAsyncThunk(
    `${sliceName}/ADD_TO_SHOPPING_CART`,
    async (additionToShoppingCart: AdditionToShoppingCart) => await addToShoppingCart(additionToShoppingCart)
);

const shoppingCartSlice = createSlice({
    reducers: {},
    initialState,
    name: sliceName,
    extraReducers: builder => {
        const updateShoppingCartReducer = (state: ShoppingCartState, action: AnyAction) => {
            state.shoppingCart = action.payload;
        }

        return builder
            .addCase(loadShoppingCartAction.pending, (state) => {
                state.shoppingCart = null;
            })
            .addCase(loadShoppingCartAction.fulfilled, updateShoppingCartReducer)
            .addCase(updateShoppingCartItemQuantityAction.fulfilled, updateShoppingCartReducer)
            .addCase(deleteShoppingCartItemAction.fulfilled, updateShoppingCartReducer)
            .addCase(addToShoppingCartAction.fulfilled, updateShoppingCartReducer)
            // TODO: Find better way to trigger reload of shopping cart
            .addCase(placeOrderAction.fulfilled, (state) => {
                state.shoppingCart = null;
            })
    }
});

export const { reducer } = shoppingCartSlice;
