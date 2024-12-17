import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducer } = props;

    const store = createReduxStore({ ...initialState, ...asyncReducer } as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
