import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { StateSchema } from 'app/providers/StoreProvider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUserName', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('loginByUserName fullfield', async () => {
        const userData = { username: 'admin', id: 1 };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const action = loginByUserName({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('loginByUserName rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUserName({ username: 'dxsd', password: 'zzs' });
        const result = await action(dispatch, getState, undefined);
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual(undefined);
    });
});
