import { UserProfileState, loadUserProfileAction } from './user-profile-slice';
import { Resource } from '@ngxp/resource';
import { UserProfile, Address, PaymentOption } from '../domain/user-profile';
import { useEffect } from 'react';
import { isNull } from 'lodash-es';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserProfile, selectAddresses, selectPaymentOptions } from './user-profile-selectors';

export const useUserProfile = () => {
    const userProfile = useSelector<{ userProfile: UserProfileState }, Resource<UserProfile> | null>(selectUserProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isNull(userProfile)) {
            dispatch(loadUserProfileAction())
        }
    }, []);

    return userProfile;
}

export const useAddresses = () => useSelector<{ userProfile: UserProfileState }, Resource<Address>[]>(selectAddresses);


export const usePaymentOptions = () => useSelector<{ userProfile: UserProfileState }, Resource<PaymentOption>[]>(selectPaymentOptions);
