import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { apiErrorIdentify } from 'shared/api/apiErrorIdentify';
import { ApiErrorTypes } from 'shared/api/types';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import {
    articleCommentsActions,
} from 'pages/ArticleDetailsPage/model/slices/ArticleCommentsSlice';

export const addCommentForArticle = createAsyncThunk<null, string, ThunkConfig<string>>(
    ' articleComment/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const article = getArticleDetailsData(getState());
        const userAuthData = getUserAuthData(getState());

        if (!article || !userAuthData || !text) {
            throw new Error('Недостаточно данных для отправки комментария');
        }
        try {
            const sendData = {
                text,
                articleId: article.id,
                profileId: userAuthData.profileId,
            };

            const { data: commentData } = await extra.api.post<Comment>('/comments', sendData);

            if (!commentData || !commentData.id) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);
            /**
             * сервер фейковый и не может отдать ответ на post запрос по foreignKey с профилем
             * поэтому ниже делаю отдельный зарос за комментарием по id
             */

            const { id } = commentData;

            const {
                data: [newComment] = [],
            } = await extra.api.get<Comment[]>(`/comments?id=${id}&_expand=profile`);

            if (!newComment) throw new Error(ApiErrorTypes.DATA_EMPTY_ERROR);

            dispatch(articleCommentsActions.addNewComment(newComment));

            return null;
        } catch (e) {
            if (__IS_DEV__) console.log(e);
            return rejectWithValue(apiErrorIdentify(e, ApiErrorTypes.COMMENT_GET_ERROR));
        }
    },
);
