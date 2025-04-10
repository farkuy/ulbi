import axios from 'axios';
import { mockArticle } from '@/shared/consts/tests/article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchArticleDetails } from './fetchArticleDetails';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('fetchArticleDetails', () => {
    test('fetchArticleDetails fullfield', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetails);

        mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockArticle }));
        const result = await thunk.callThunk(1);

        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(mockArticle);
    });

    test('fetchArticleDetails rejected', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetails);
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(1);

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual('server error');
    });
});
