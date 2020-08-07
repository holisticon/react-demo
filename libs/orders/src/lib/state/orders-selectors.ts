import { createSelector } from '@reduxjs/toolkit';
import { OrdersState } from './orders-slice';

export const selectOrdersFeature = (state: { orders: OrdersState }) => {
    return state.orders;
};

export const selectOrderHistory = createSelector(
    selectOrdersFeature,
    state => state.orderHistory
);
