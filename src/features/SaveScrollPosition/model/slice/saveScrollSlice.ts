import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { keyStateSchema } from '@/app/providers/StoreProvider';
import { SaveScrollSchema } from '../types/saveScroll';

const initialState: SaveScrollSchema = {
    scrollSave: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        saveScrollPage: (state, { payload }: PayloadAction<{key: keyStateSchema, pos: number}>) => {
            state.scrollSave[payload.key] = payload.pos;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
