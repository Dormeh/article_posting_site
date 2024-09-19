import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { UserRole } from 'shared/model/consts/common';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.ADMIN));

export const isUserManager = createSelector(getUserRoles, (roles) =>
    roles?.includes(UserRole.MANAGER),
);
