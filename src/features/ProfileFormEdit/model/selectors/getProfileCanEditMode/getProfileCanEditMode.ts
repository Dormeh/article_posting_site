import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileCanEditMode = createSelector(
    getUserAuthData,
    getProfileData,
    (authData, profile) => authData?.profileId === profile?.id,
);
