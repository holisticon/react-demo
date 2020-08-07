import React from 'react';
import { OrderHistory } from '../domain/order';
import { isNull } from 'lodash-es';
import Order from '../ui/order/order';
import { useOrderHistory } from '../state/use-order-history-hook';

/* eslint-disable-next-line */
export interface OrdersProps { }

export const Orders = (props: OrdersProps) => {
    const orderHistory = useOrderHistory();

    return (
        <>
            <h1 className="mb-5">Orders</h1>

            <ul className="list-unstyled">
                {isNull(orderHistory) ? null : orderHistory.orders.map(order => (
                    <li className="mb-5" key={order._id}>
                        <Order order={order} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Orders;
