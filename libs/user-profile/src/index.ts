export { UserProfile as default } from './lib/views/user-profile';
export * from './lib/state/user-profile-slice';
// TODO: resolve naming conflict by moving UI and state in separate libraries
export { Address } from './lib/ui/address/address';
export { PaymentOption } from './lib/ui/payment-option/payment-option';
export { Address as IAddress, PaymentOption as IPaymentOption } from './lib/domain/user-profile';
export { useUserProfile, useAddresses, usePaymentOptions } from './lib/state/use-user-profile-hook';
