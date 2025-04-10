import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName', () => {
    test('loginByUserName fullfield', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        const userData = { username: 'admin', id: 1 };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('loginByUserName rejected', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({ username: 'dxsd', password: 'zzs' });

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual('error');
    });
});
