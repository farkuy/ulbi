import { Country, CURRENCY } from 'shared/consts/common';

export interface Profile {
    first: string,
    lastname: string,
    age: number,
    currency: CURRENCY,
    country: Country,
    city: string,
    username: string,
    avatar: string,
}

export interface ProfileSchema {
    data?: Profile;
    readonly: boolean;
    loading: boolean;
    error?: string;
}
