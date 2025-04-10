import { DeepPartial } from '@/shared/types/DeepPartial';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
    test('getProfileLoading return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                loading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });
    test('getProfileLoading not return form', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toBeUndefined();
    });
});
