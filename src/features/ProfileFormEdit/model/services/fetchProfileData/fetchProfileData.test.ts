import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ApiErrorTypes } from 'shared/model/consts/api';
import { testProfileData } from '../updateProfileData/profileData';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetch profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: testProfileData }));

        const result = await thunk.callThunk('1');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(testProfileData);
    });

    test('error get profile data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockRejectedValue(
            Promise.resolve({
                status: 403,
                data: {
                    message: ApiErrorTypes.PROFILE_GET_ERROR,
                },
            }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ApiErrorTypes.PROFILE_GET_ERROR);
    });
});
