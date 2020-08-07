import { createSelector } from '@reduxjs/toolkit';
import { UserProfileState } from './user-profile-slice';
import { defaultTo } from 'lodash-es';
import { isNull } from 'util';

export const selectUserProfileState = (state: { userProfile: UserProfileState }) => {
    return state.userProfile;
};

export const selectUserProfile = createSelector(
    selectUserProfileState,
    state => state.userProfile
);

export const selectAddresses = createSelector(
    selectUserProfile,
    userProfile => isNull(userProfile) ? [] : userProfile.addresses
);

export const selectPaymentOptions = createSelector(
    selectUserProfile,
    userProfile => isNull(userProfile) ? [] : userProfile.paymentOptions
);
