import React from 'react';
import { Address as IAddress } from '../../domain/user-profile';

/* eslint-disable-next-line */
export interface AddressProps {
  address: IAddress;
}

export const Address = ({ address }: AddressProps) => {
  return (
    <address className="mb-0">
        {address.name}<br />
        <small>
            {address.street}, {address.city}
        </small>
    </address>
  );
};

export default Address;
