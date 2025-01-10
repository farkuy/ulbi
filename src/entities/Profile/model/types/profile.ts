import { Country, CURRENCY } from 'shared/consts/common';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CURRENCY,
    country?: Country,
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
}
