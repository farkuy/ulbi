import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm, validateProfileData } from 'entities/Profile';
import { Profile, ValidateProfileError } from '../../types/profile';

export const saveProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/saveProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        try {
            const formData = getProfileForm(getState());
            const errors = validateProfileData(formData);
            if (errors.length > 0) {
                return rejectWithValue(errors);
            }
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);