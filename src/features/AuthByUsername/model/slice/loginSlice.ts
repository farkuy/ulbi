import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
