import { Profile } from '@/entities/Profile';

export enum ValidateProfileError {
    INCORRECT_DATA = 'incorrect data',
    INCORRECT_AGE = 'incorrect age',
    EMPTY_DATA = 'empty data',
    SERVER_ERROR = 'server error',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile; // TODO избавить от дубликата
    readonly: boolean;
    loading: boolean;
    error?: string;
    validateDataError?: ValidateProfileError[];
}
