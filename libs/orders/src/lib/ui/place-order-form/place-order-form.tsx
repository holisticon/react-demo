import React, { FormEvent, useState, useEffect } from 'react';
import { IAddress, Address, IPaymentOption, PaymentOption, useUserProfile, useAddresses, usePaymentOptions } from '@holisticon/user-profile';
import { getUri } from '@holisticon/resource';
import { OrderItem } from '../../domain/order';
import { isEmpty, isUndefined } from 'lodash-es';
import { useDispatch } from 'react-redux';
import { placeOrderAction } from '../../state/orders-slice';

/* eslint-disable-next-line */
export interface PlaceOrderFormProps {
    orderItems: OrderItem[]
}

export const PlaceOrderForm = ({ orderItems }: PlaceOrderFormProps) => {
    // TODO: Only used for loading the profile (once)
    useUserProfile();

    const dispatch = useDispatch();

    const addresses = useAddresses();
    const paymentOptions = usePaymentOptions();

    const [selectedBillingAddress, setBillingAddress] = useState<IAddress>();
    const [selectedShippingAddress, setShippingAddress] = useState<IAddress>();
    const [selectedPaymentOption, setPaymentOption] = useState<IPaymentOption>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(placeOrderAction({
            billingAddress: selectedBillingAddress!,
            orderItems,
            payment: selectedPaymentOption!,
            shippingAddress: selectedShippingAddress!
        }));
    }

    if (isEmpty(addresses) || isEmpty(paymentOptions)) {
        return null;
    }

    // TODO: Beautify
    if (isUndefined(selectedBillingAddress)) {
        setBillingAddress(addresses[0]);
    }
    if (isUndefined(selectedShippingAddress)) {
        setShippingAddress(addresses[0]);
    }
    if (isUndefined(selectedPaymentOption)) {
        setPaymentOption(paymentOptions[0]);
    }

    return (
        <form className="mt-5 row align-items-start" onSubmit={onSubmit}>
            <h2 className="col-12 h3 mb-4">Place Order</h2>

            <div className="form-group col-4 billing-address">
                <label className="form-control-label h6 mb-3" htmlFor="billingAddress">Billing Address</label>

                {addresses.map((address, i) => (
                    <div className="form-check mb-3" key={getUri(address)}>
                        <input className="form-check-input" type="radio" id={'billingAddress-' + i} value={getUri(address)}
                            checked={selectedBillingAddress === address}
                            onChange={() => setBillingAddress(address)}
                        />
                        <label className="form-check-label" htmlFor={'billingAddress-' + i}>
                            <Address address={address} />
                        </label>
                    </div>
                ))}
            </div>

            <div className="form-group col-4 shipping-address">
                <label className="form-control-label h6 mb-3" htmlFor="shippingAddress">Shipping Address</label>

                {addresses.map((address, i) => (
                    <div className="form-check mb-3" key={getUri(address)}>
                        <input className="form-check-input" type="radio" id={'shippingAddress-' + i} value={getUri(address)}
                            checked={selectedShippingAddress === address}
                            onChange={() => setShippingAddress(address)}
                        />
                        <label className="form-check-label" htmlFor={'shippingAddress-' + i}>
                            <Address address={address} />
                        </label>
                    </div>
                ))}
            </div>

            <div className="form-group col-2 payment">
                <label className="form-control-label h6 mb-3" htmlFor="payment">Payment</label>

                {paymentOptions.map((paymentOption, i) => (
                    <div className="form-check mb-3" key={getUri(paymentOption)}>
                        <input className="form-check-input" type="radio" id={'payment-' + i} value={getUri(paymentOption)}
                            checked={selectedPaymentOption === paymentOption}
                            onChange={() => setPaymentOption(paymentOption)}
                        />
                        <label className="form-check-label" htmlFor={'payment-' + i}>
                            <PaymentOption paymentOption={paymentOption} />
                        </label>
                    </div>
                ))}
            </div>

            <div className="form-group col-2 text-right">
                <button type="submit" className="btn btn-primary">Place Order</button>
            </div>
        </form >

    );
};

export default PlaceOrderForm;
