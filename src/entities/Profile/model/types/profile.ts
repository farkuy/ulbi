import { CURRENCY } from 'entities/Currency';
import { COUNTRY } from 'entities/Country';

export enum ValidateProfileError {
    INCORRECT_DATA = 'incorrect data',
    INCORRECT_AGE = 'incorrect age',
    EMPTY_DATA = 'empty data',
    SERVER_ERROR = 'server error',
}

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CURRENCY,
    country?: COUNTRY,
    city?: string,
    username?: string,
    avatar?: string,
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile; // TODO избавить от дубликата
    readonly: boolean;
    loading: boolean;
    error?: string;
    validateDataError?: ValidateProfileError[];
}
