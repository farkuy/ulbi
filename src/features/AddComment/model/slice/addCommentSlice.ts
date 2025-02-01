import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { sendComment } from '../../model/service/sendComment';
import { AddCommentSchema } from '../types/addComment';

const initialState: AddCommentSchema = {
    text: undefined,
    error: undefined,
};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendComment.pending, (state) => {
            state.error = undefined;
        });
        builder.addCase(sendComment.fulfilled, (state) => {
            state.error = undefined;
            state.text = '';
        });
        builder.addCase(sendComment.rejected, (state) => {
            state.error = i18n.t('ADD_COMMENT_ERROR');
        });
    },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
