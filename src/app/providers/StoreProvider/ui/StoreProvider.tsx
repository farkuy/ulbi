import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

interface StoreProviderProps {
    initialState?: StateSchema
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
