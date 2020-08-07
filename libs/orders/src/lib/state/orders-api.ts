import { Resource } from '@ngxp/resource';
import { OrderHistory, NewOrder } from '../domain/order';
import { toNewOrderRequest } from './new-order-request.mapper';

export async function loadOrderHistory(): Promise<Resource<OrderHistory>> {
    return fetch('https://example.hypercontract.org/orders')
        .then(r => r.json());
}

export async function placeOrder(newOrder: NewOrder): Promise<Resource<OrderHistory>> {
    return fetch('https://example.hypercontract.org/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toNewOrderRequest(newOrder))
    }).then(r => r.json());
}
