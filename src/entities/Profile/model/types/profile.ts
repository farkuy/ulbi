import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';

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
