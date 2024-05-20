import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions, articlesPageReducer } from '../../slice/articlesPageSlice';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageSelectors/getArticlesPageSelectors';
import { fetchNextPartData } from './fetchNextPartData';

describe('fetchNextArticlesPage.test', () => {
    test('success with has more true', async () => {
        const thunk = new TestAsyncThunk(
            fetchNextPartData,
            {
                articlesPage: {
                    hasMore: true,
                    limit: 12,
                    isLoading: false,
                    ids: [],
                    entities: {},
                },
            },
            { articlesPage: articlesPageReducer },
        );
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.increasePage());
    });
    test('fetchArticleList and increasePage are not called with hasMore false', async () => {
        const thunk = new TestAsyncThunk(
            fetchNextPartData,
            {
                articlesPage: {
                    page: 2,
                    ids: [],
                    entities: {},
                    limit: 5,
                    isLoading: false,
                    hasMore: false,
                },
            },
            { articlesPage: articlesPageReducer },
        );
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(articlesPageActions.increasePage());
    });
    test('hasMore must be false when articles will end', async () => {
        const thunk = new TestAsyncThunk(
            fetchNextPartData,
            {
                articlesPage: {
                    page: 2,
                    ids: [],
                    entities: {},
                    limit: 5,
                    isLoading: false,
                    hasMore: true,
                },
            },
            { articlesPage: articlesPageReducer },
        );
        thunk.api.get.mockResolvedValue(
            Promise.resolve({
                status: 200,
                data: [],
            }),
        );
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.increasePage());
        expect(getArticlesPageHasMore(thunk.store.getState())).toBe(false);
    });
});
