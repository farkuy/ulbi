import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
    test('added username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'Вова Вист',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('Вова Вист');
    });

    test('added "" username', () => {
        const state: DeepPartial<StateSchema> = undefined;
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
