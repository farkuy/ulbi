import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { USER_AUTH_TOKEN } from 'shared/consts/auth';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const loginByUserName = createAsyncThunk<User, LoginSchema, ThunkConfig<string>>(
    'login/loginByUserName',
    async (loginData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.post('/login', loginData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUser(response.data));
            localStorage.setItem(USER_AUTH_TOKEN, JSON.stringify(response.data));
            extra.navigate!('/about');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
