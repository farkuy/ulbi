import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginUserName', () => {
    test('added password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: '123wqt4@EWsaada!21?///!>.',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123wqt4@EWsaada!21?///!>.');
    });

    test('added "" password', () => {
        const state: DeepPartial<StateSchema> = undefined;
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
