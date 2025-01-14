import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { saveProfileData } from '../service/saveProfileData/saveProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    loading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        setProfileForm: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelProfileChange: (state) => {
            state.form = state.data;
        },
    },
    extraReducers: (builder) => {
        // Получение данных пользователя
        builder.addCase(fetchProfileData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.loading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.validateDataError = undefined;
        });
        builder.addCase(fetchProfileData.rejected, (state) => {
            state.loading = false;
            state.error = i18n.t('INCORRECT_DATA');
        });

        // Сохранение данных пользователя
        builder.addCase(saveProfileData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(saveProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.loading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.validateDataError = undefined;
            state.readonly = true;
        });
        builder.addCase(saveProfileData.rejected, (state, action) => {
            state.loading = false;
            state.validateDataError = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
