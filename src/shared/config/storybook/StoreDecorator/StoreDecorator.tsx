import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'features/ProfileFormEdit';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { articleCommentsReducer, addCommentForArticleReducer } from 'pages/ArticleDetailPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articlesPage: articlesPageReducer,
    articleDetails: articleReducer,
    articleComments: articleCommentsReducer,
    addCommentForArticle: addCommentForArticleReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>

);
