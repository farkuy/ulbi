import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/DeepPartial';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleReducer';

const defaultAsyncReducer: ReducersList = {
    login: loginReducer,
};

export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducer?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducer, ...asyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
