import { Resource } from '@holisticon/resource';

export interface UserProfile {
    addresses: Resource<Address>[];
    paymentOptions: Resource<PaymentOption>[]
}

export interface Address {
    name: string;
    street: string;
    zipCode: string;
    city: string;
    country: string;
}

export interface PaymentOption {
    accountOwner: string;
    iban: string;
    bic: string;
}
