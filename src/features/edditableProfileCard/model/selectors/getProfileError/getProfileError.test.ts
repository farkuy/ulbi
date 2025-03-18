import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('getProfileError return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'бу, испугался',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('бу, испугался');
    });
    test('getProfile not return profile', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBeUndefined();
    });
});
