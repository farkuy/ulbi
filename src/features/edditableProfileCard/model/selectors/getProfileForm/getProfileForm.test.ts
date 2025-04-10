import { DeepPartial } from '@/shared/types/DeepPartial';
import { mockProfile } from '@/shared/consts/tests/profile';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('getProfileForm return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: mockProfile,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(mockProfile);
    });
    test('getProfileForm not return form', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBeUndefined();
    });
});
