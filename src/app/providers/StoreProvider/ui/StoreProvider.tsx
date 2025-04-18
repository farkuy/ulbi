import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
import { StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';
import { DeepPartial } from '@/shared/types/DeepPartial';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
    children: ReactNode;
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
