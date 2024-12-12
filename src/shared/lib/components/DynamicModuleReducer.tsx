import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { keyStateSchema, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in keyStateSchema]?: Reducer
}

type ReducersListEntry = [keyStateSchema, Reducer]

interface DynamicModuleReducerProps {
    reducers: ReducersList;
    deleteWithUnmount?: boolean;
}

export const DynamicModuleReducer:FC<DynamicModuleReducerProps> = (props) => {
    const { children, reducers, deleteWithUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reduceManager.add(name, reducer);
            dispatch({ type: `Init ${name} reducer` });
        });

        return () => {
            if (deleteWithUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reduceManager.remove(name);
                    dispatch({ type: `Delete ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
