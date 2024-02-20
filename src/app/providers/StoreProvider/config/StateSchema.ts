import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CombinedState, ReducersMapObject } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailsSchema';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { PageSchema } from 'shared/ui/Page/model/type/PageSchema';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    page: PageSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetails?: ArticleDetailSchema;
    // articleComments?: ArticleCommentsSchema;
    // articlesRecommendations?: ArticleRecommendationsSchema;
    addCommentForArticle?: AddCommentFormSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => boolean;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<E> {
    rejectValue: E;
    extra: ThunkExtraArg;
    state: StateSchema;
}
