import { Resource, ResourceUri } from '@holisticon/resource';
import { IAddress, IPaymentOption } from '@holisticon/user-profile';

export interface OrderHistory {
    orders: Resource<Order>[];
}

export interface Order {
    orderStatus: OrderStatus;
    orderItems: OrderItem[];
    billingAddress: IAddress;
    shippingAddress: IAddress;
    payment: IPaymentOption;
    orderDate: string;
}

export interface OrderItem {
    productName: string;
    productDescription: string;
    price: number;
    quantity: number;
    product: string;
}

export interface NewOrder {
    orderItems: OrderItem[];
    billingAddress: IAddress;
    shippingAddress: IAddress;
    payment: IPaymentOption;
}

export interface NewOrderRequest {
    shoppingCartItems: ResourceUri[];
    billingAddress: ResourceUri;
    shippingAddress: ResourceUri;
    payment: ResourceUri;
}

export enum OrderStatus {
    Cancelled = 'Cancelled',
    Delivered = 'Delivered',
    Processing = 'Processing'
}
