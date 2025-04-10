import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUser } from '@/entities/User';
import { getAddCommentText } from '../../model/selector/getComment/getComment';

export const sendComment = createAsyncThunk<Comment, string | undefined, ThunkConfig<string>>(
    'comment/sendComment',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        try {
            const user = getUser(getState());
            const comment = getAddCommentText(getState());

            if (!id || !user || !comment) {
                return rejectWithValue('error');
            }

            const response = await extra.api.post('/comments', {
                text: comment,
                articleId: id,
                userId: user.id,
            });

            if (!response.data) {
                return rejectWithValue('server error');
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
