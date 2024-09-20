import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from 'entities/Profile';
import { ApiErrorTypes } from 'shared/model/consts/api';
import { profileReducer } from '../../slice/profileSlice';
import { testProfileData } from './profileData';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData.test', () => {
    test('success fetch profile data', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    data: testProfileData,
                },
                user: {
                    authData: {
                        profileId: '1',
                    },
                },
            },
            { profile: profileReducer },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ data: testProfileData }));

        const result = await thunk.callThunk(testProfileData as Profile);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(testProfileData);
    });

    test('error get profile data', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    data: testProfileData,
                },
                user: {
                    authData: {
                        profileId: '1',
                    },
                },
            },
            { profile: profileReducer },
        );
        thunk.api.put.mockRejectedValue(
            Promise.resolve({
                status: 403,
                data: {
                    message: ApiErrorTypes.PROFILE_UPDATE_ERROR,
                },
            }),
        );
        const result = await thunk.callThunk(testProfileData as Profile);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ApiErrorTypes.PROFILE_UPDATE_ERROR);
    });
});
