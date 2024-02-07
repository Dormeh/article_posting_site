import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('getQueryParams.test', () => {
    test('test with one param', () => {
        const param = { param: 'test' };
        const result = getQueryParams(param);
        expect(result).toBe('?param=test');
    });
    test('test with multiple params', () => {
        const param = {
            param1: 'test1',
            param2: 'test2',
        };
        const result = getQueryParams(param);
        expect(result).toBe('?param1=test1&param2=test2');
    });
    test('test with undefined param', () => {
        const param = { param: 'test' };
        const result = getQueryParams({
            param: undefined,
        });
        expect(result).toBe('');
    });
});
