import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducer, ...asyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
