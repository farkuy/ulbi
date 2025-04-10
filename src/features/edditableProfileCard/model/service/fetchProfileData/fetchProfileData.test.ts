import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { mockProfile } from '@/shared/consts/tests/profile';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('fetchProfileData', () => {
    test('fetchProfileData fullfield', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockProfile }));
        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('fetchProfileData rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual('server error');
    });
});
