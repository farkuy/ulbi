import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import { DeepPartial } from 'shared/types/DeepPartial';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducer } = props;
    const navigate = useNavigate();

    const store = createReduxStore({ ...initialState, ...asyncReducer } as StateSchema, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
