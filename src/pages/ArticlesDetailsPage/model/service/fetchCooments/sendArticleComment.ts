import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUser } from 'entities/User';
import { getArticleDetails } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCooments/fetchComments';

export const sendArticleComment = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
    'article/sendArticleComment',
    async (text, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;
        console.log('text', text, 3);
        try {
            const user = getUser(getState());
            const article = getArticleDetails(getState());

            if (!article?.id || !user) {
                return rejectWithValue('error');
            }

            const response = await extra.api.post('/comments', {
                text,
                articleId: article?.id,
                userId: user.id,
            });

            if (!response.data) {
                return rejectWithValue('server error');
            }

            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
