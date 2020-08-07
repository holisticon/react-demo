import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProfile } from '../domain/user-profile';
import { loadUserProfile } from './user-profile-api';
import { Resource } from '@ngxp/resource';

const sliceName = 'userProfile';

export interface UserProfileState {
    userProfile: Resource<UserProfile> | null;
}

export const initialState: UserProfileState = {
    userProfile: null
};

export const loadUserProfileAction = createAsyncThunk(
    `${sliceName}/LOAD_USER_PROFILE`,
    async () => await loadUserProfile()
);

const userProfileSlice = createSlice({
    reducers: {},
    initialState,
    name: sliceName,
    extraReducers: builder => builder
        .addCase(loadUserProfileAction.pending, (state) => {
            state.userProfile = null;
        })
        .addCase(loadUserProfileAction.fulfilled, (state, action) => {
            state.userProfile = action.payload;
        })
});

export const { reducer } = userProfileSlice;
