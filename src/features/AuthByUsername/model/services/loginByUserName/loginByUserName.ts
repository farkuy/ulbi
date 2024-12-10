import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import axios from 'axios';
import { t } from 'i18next';
import { USER_AUTH_TOKEN } from 'shared/consts/auth';

export const loginByUserName = createAsyncThunk<User, LoginSchema>(
    'login/loginByUserName',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setUser(response.data));
            localStorage.setItem(USER_AUTH_TOKEN, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(t('INCORRECT_DATA'));
        }
    },
);
