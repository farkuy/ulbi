import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_AUTH_TOKEN } from 'shared/consts/auth';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.setItem(USER_AUTH_TOKEN, '');
        },
        initAuthData: (state) => {
            const data = localStorage.getItem(USER_AUTH_TOKEN);
            if (data) state.authData = JSON.parse(data);
            state._inited = true;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
