import { StateSchema } from 'app/providers/StoreProvider';
import { testProfileData } from 'shared/config/tests/constants/profileData';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: testProfileData as Profile,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(testProfileData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
