import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginAuthData } from 'features/AuthByUsername/model/selectors/getLoginAuthData/getLoginAuthData';
import { articleTestData } from 'entities/Article/ui/ArticleDetails/articleTestData';
import {
    getArticleDetailsData,
    getArticleDetailsError, getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/getArticleDetails/getArticleDetails';

describe('getArticleDetailsData.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: articleTestData,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(articleTestData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
describe('getArticleDetailsError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
describe('getArticleDetailsIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
