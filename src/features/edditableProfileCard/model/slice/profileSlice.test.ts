import { mockProfile } from 'shared/consts/tests/profile';
import { saveProfileData } from 'entities/Profile';
import {
    ProfileSchema,
    ValidateProfileError,
} from '../../model/types/edditableProfileCard.types';
import { profileActions, profileReducer } from './profileSlice';

describe('counterSlice.test', () => {
    const state: ProfileSchema = {
        loading: false,
        readonly: true,
    };

    test('setReadonly false', () => {
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({ loading: false, readonly: false });
    });
    test('setProfileForm', () => {
        expect(profileReducer(state as ProfileSchema, profileActions.setProfileForm(mockProfile))).toEqual({ loading: false, readonly: true, form: mockProfile });
    });
    test('cancelProfileChange', () => {
        expect(profileReducer({ ...state, validateDataError: [ValidateProfileError.SERVER_ERROR] } as ProfileSchema, profileActions.cancelProfileChange())).toEqual({ loading: false, readonly: true });
    });

    test('saveProfileData.pending', () => {
        expect(profileReducer(state as ProfileSchema, saveProfileData.pending)).toEqual({ loading: true, readonly: true });
    });
    test('saveProfileData.fulfilled', () => {
        expect(profileReducer(state as ProfileSchema, saveProfileData.fulfilled)).toEqual({
            loading: false, readonly: true, validateDataError: undefined, data: undefined, form: undefined,
        });
    });
    test('saveProfileData.rejected', () => {
        expect(profileReducer(state as ProfileSchema, saveProfileData.rejected)).toEqual({
            loading: false, readonly: true,
        });
    });
});
