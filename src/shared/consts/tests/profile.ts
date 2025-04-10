import { CURRENCY } from '@/entities/Currency';
import { COUNTRY } from '@/entities/Country';
import { Profile } from '@/entities/Profile';

export const mockProfile: Profile = {
    first: 'Anton',
    lastname: 'God',
    age: 25,
    currency: CURRENCY.EUR,
    country: COUNTRY.USA,
    city: 'DZR',
    username: 'Tywin',
    avatar: 'dawqdqwdwq',
};
