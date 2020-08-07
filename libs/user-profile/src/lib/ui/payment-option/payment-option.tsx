import React from 'react';
import { PaymentOption as IPaymentOption } from '../../domain/user-profile';

/* eslint-disable-next-line */
export interface PaymentOptionProps {
    paymentOption: IPaymentOption
}

export const PaymentOption = ({paymentOption}: PaymentOptionProps) => {
  return (
    <>
      {paymentOption.accountOwner}<br />
      <small>{paymentOption.iban}</small>
    </>
  );
};

export default PaymentOption;
