import { DeepPartial } from 'shared/types/DeepPartial';
import { mockProfile } from 'shared/consts/tests/profile';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfile } from './getProfile';

describe('getProfile', () => {
    test('getProfile return profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: mockProfile,
            },
        };
        expect(getProfile(state as StateSchema)).toEqual(mockProfile);
    });
    test('getProfile not return profile', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfile(state as StateSchema)).toBeUndefined();
    });
});
