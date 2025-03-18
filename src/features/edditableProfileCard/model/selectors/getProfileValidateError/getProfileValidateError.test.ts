import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../../model/types/edditableProfileCard.types';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError', () => {
    test('getProfileValidateError return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateDataError: [ValidateProfileError.EMPTY_DATA, ValidateProfileError.INCORRECT_AGE],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.EMPTY_DATA, ValidateProfileError.INCORRECT_AGE]);
    });
    test('getProfileLoading not return error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toBeUndefined();
    });
});
