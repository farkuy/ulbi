import { mockProfile } from 'shared/consts/tests/profile';
import { ValidateProfileError } from '../../../model/types/edditableProfileCard.types';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    test('validateProfileData fullfield', async () => {
        const result = validateProfileData(mockProfile);

        expect(result).toEqual([]);
    });

    test('validateProfileData error Age', async () => {
        const result = validateProfileData({ ...mockProfile, lastname: '' });

        expect(result).toEqual([ValidateProfileError.EMPTY_DATA]);
    });

    test('validateProfileData error Age', async () => {
        const result = validateProfileData({ ...mockProfile, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
