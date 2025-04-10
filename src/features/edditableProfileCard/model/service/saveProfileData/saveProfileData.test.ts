import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { mockProfile } from '@/shared/consts/tests/profile';
import { ValidateProfileError } from '../../../model/types/edditableProfileCard.types';
import { saveProfileData } from './saveProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('saveProfileData', () => {
    test('saveProfileData fullfield', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form: mockProfile,
            },
        });

        mockedAxios.put.mockReturnValue(Promise.resolve({ data: mockProfile }));
        const result = await thunk.callThunk();

        expect(mockedAxios.put).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('saveProfileData rejected', async () => {
        const thunk = new TestAsyncThunk(saveProfileData);
        mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('saveProfileData rejected empty data', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form: { ...mockProfile, lastname: '' },
            },
        });
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: { ...mockProfile, lastname: '' } }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ValidateProfileError.EMPTY_DATA]);
    });

    test('saveProfileData rejected age', async () => {
        const thunk = new TestAsyncThunk(saveProfileData, {
            profile: {
                form: { ...mockProfile, age: undefined },
            },
        });
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: { ...mockProfile, age: null } }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
