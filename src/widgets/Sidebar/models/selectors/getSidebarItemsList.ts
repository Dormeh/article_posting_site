import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { sidebarItemsList } from '../sidebarItemsList';

export const getSidebarItemsList = createSelector(
    getUserAuthData,
    (authData) => sidebarItemsList.filter((item) => {
        if (item.authOnly && !authData) return false;
        if (item.pathModify && authData) item.pathModify(authData);
        return true;
    }),
);
