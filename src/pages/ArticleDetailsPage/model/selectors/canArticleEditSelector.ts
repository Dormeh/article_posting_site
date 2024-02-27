import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const canArticleEditSelector = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => user?.profileId === article?.profile.id,
);
