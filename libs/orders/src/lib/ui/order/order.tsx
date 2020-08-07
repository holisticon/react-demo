import React from 'react';
import { Order as IOrder } from '../../domain/order';
import { Address, PaymentOption } from '@ngxp/user-profile';

/* eslint-disable-next-line */
export interface OrderProps {
    order: IOrder
}

export const Order = ({ order }: OrderProps) => {
  return (
    <div className="row">
        <div className="col-12">
            {/* TODO: format date  */}
            <h2 className="h5 mb-1">Order {order.orderDate}</h2>
            <p className="mt-2"><span className="badge badge-secondary status">{order.orderStatus}</span></p>
        </div>

        <div className="col-12 mt-2 row">
            <div className="col-3 billing-address">
                <h3 className="h6">Billing Address</h3>

                <Address address={order.billingAddress} />
            </div>
            <div className="col-3 shipping-address">
                <h3 className="h6">Shipping Address</h3>

                <Address address={order.shippingAddress} />
            </div>
            <div className="col-3 payment">
                <h3 className="h6">Payment</h3>

                <PaymentOption paymentOption={order.payment} />
            </div>
        </div>
    </div>

  );
};

export default Order;
