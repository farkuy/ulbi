import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import axios from 'axios';
import { t } from 'i18next';
import { USER_AUTH_TOKEN } from 'shared/consts/auth';

export const loginByUserName = createAsyncThunk<User, LoginSchema>(
    'login/loginByUserName',
    async (loginData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            // @ts-ignore
            const response = await extra.axios.post('/login', loginData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUser(response.data));
            localStorage.setItem(USER_AUTH_TOKEN, JSON.stringify(response.data));
            // @ts-ignore
            extra.navigate('/about');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(t('INCORRECT_DATA'));
        }
    },
);
