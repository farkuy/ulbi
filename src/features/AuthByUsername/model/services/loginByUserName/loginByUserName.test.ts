import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { User } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName', () => {
    const thunk = new TestAsyncThunk(loginByUserName);

    test('loginByUserName fullfield', async () => {
        const userData = { username: 'admin', id: 1 };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('loginByUserName rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'dxsd', password: 'zzs' });

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual(undefined);
    });
});
