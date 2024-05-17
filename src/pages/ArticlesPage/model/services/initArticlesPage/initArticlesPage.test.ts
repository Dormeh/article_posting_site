import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesMockData } from 'entities/Article/config/mock/articlesMockData';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticlesSelector,
} from '../../slice/articlesPageSlice';
import {
    getArticlesPageIsInit,
} from '../../selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { initArticlesPage } from './initArticlesPage';

describe('initArticlesPage.test', () => {
    test('_inited must be true after action fulfilled and articles will get ', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                hasMore: true,
                limit: 12,
                isLoading: false,
                ids: [],
                entities: {},
                _inited: false,
            },
        }, { articlesPage: articlesPageReducer });
        thunk.api.get.mockResolvedValue(Promise.resolve({
            status: 200,
            data: articlesMockData,
        }));
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(5);
        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.initPageState());
        expect(getArticlesPageIsInit(thunk.store.getState())).toBe(true);
        expect(getArticlesSelector.selectAll(thunk.store.getState())).toHaveLength(articlesMockData.length);
    });
    test('must do not activate initPageState when _inited is true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
            },
        }, { articlesPage: articlesPageReducer });
        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(articlesPageActions.initPageState());
    });
});
