import { CURRENCY } from 'entities/Currency';
import { COUNTRY } from 'entities/Country';

export interface Profile {
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
}
