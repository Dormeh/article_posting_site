import { Profile, ProfileSchema } from 'entities/Profile';
import { testProfileData } from '../services/updateProfileData/profileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    test('test errorReset', () => {
        const state : DeepPartial<ProfileSchema> = { error: 'error' };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.errorReset(),
        )).toEqual({ error: undefined });
    });
    test('test updateProfileData pending', () => {
        const state : DeepPartial<ProfileSchema> = {
            error: 'error',
            isLoading: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            error: undefined,
            isLoading: true,
        });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(testProfileData as Profile, '', testProfileData as Profile),
        )).toEqual({
            isLoading: false,
            data: testProfileData,
        });
    });
    test('test update profile service rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.rejected(new Error(), '', testProfileData as Profile, 'error'),
        )).toEqual({
            isLoading: false,
            error: 'error',
        });
    });
});
