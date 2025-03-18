import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../../model/types/edditableProfileCard.types';

export const validateProfileData = (data?: Profile): ValidateProfileError[] => {
    const dataError: ValidateProfileError[] = [];

    if (!data?.first || !data?.lastname || !data?.city || !data?.avatar) {
        dataError.push(ValidateProfileError.EMPTY_DATA);
    }

    if (!data?.age || data?.age < 0) {
        dataError.push(ValidateProfileError.INCORRECT_AGE);
    }

    return dataError;
};
