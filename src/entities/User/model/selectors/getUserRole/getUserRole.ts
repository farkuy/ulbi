import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { UserRole } from '../../types/user';

export const getUserRole = (state: StateSchema) => state.user.authData?.roles || [];

export const getIsAdmin = createSelector(
    getUserRole,
    (authData) => authData?.includes(UserRole.ADMIN) || false,
);

export const getIsManager = createSelector(
    getUserRole,
    (authData) => authData?.includes(UserRole.MANAGER) || false,
);
