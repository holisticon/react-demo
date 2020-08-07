import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NewOrder, OrderHistory } from '../domain/order';
import { loadOrderHistory, placeOrder } from './orders-api';

const sliceName = 'orders';

export interface OrdersState {
    orderHistory: OrderHistory | null
}

export const initialState: OrdersState = {
    orderHistory: null
};

export const loadOrderHistoryAction = createAsyncThunk(
    `${sliceName}/LOAD_ORDER_HISTORY`,
    async () => await loadOrderHistory()
);

export const placeOrderAction = createAsyncThunk(
    `${sliceName}/PLACE_ORDER`,
    async (newOrder: NewOrder) => await placeOrder(newOrder)
);

const ordersSlice = createSlice({
    reducers: {},
    initialState,
    name: sliceName,
    extraReducers: builder => builder
        .addCase(loadOrderHistoryAction.pending, (state) => {
            state.orderHistory = null;
        })
        .addCase(loadOrderHistoryAction.fulfilled, (state, action) => {
            state.orderHistory = action.payload;
        })
});

export const { reducer } = ordersSlice;
