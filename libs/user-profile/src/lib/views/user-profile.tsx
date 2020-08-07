import { getUri } from '@ngxp/resource';
import React from 'react';
import { useAddresses, usePaymentOptions, useUserProfile } from '../state/use-user-profile-hook';
import Address from '../ui/address/address';
import PaymentOption from '../ui/payment-option/payment-option';

/* eslint-disable-next-line */
export interface UserProfileProps {}

export const UserProfile = (props: UserProfileProps) => {
    // TODO: Only used for loading the profile (once)
    useUserProfile();

    const addresses = useAddresses();
    const paymentOptions = usePaymentOptions();

    return (
        <>
            <h1 className="mb-5">User Profile</h1>

            <div className="row">
                <section className="mb-5 col-4">
                    <h2 className="h5 mb-3">Addresses</h2>

                    <ul>
                        {addresses.map(address => (
                            <li className="mb-3" key={getUri(address)}>
                                <Address address={address}></Address>
                            </li>
                        ))}

                    </ul>
                </section>

                <section className="mb-5 col-4">
                    <h2 className="h5 mb-3">Payment Options</h2>

                    <ul>
                        {paymentOptions.map(paymentOption => (
                            <li className="mb-3" key={getUri(paymentOption)}>
                                <PaymentOption paymentOption={paymentOption}></PaymentOption>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default UserProfile;
