import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { keyStateSchema, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in keyStateSchema]?: Reducer
}

interface DynamicModuleReducerProps {
    reducers: ReducersList;
    deleteWithUnmount?: boolean;
    className?: string;
}

export const DynamicModuleReducer:FC<DynamicModuleReducerProps> = (props) => {
    const {
        children, reducers, deleteWithUnmount = true, className,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reduceManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!mountedReducers[name as keyStateSchema]) {
                store.reduceManager.add(name as keyStateSchema, reducer);
                dispatch({ type: `Init ${name} reducer` });
            }
        });

        return () => {
            if (deleteWithUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reduceManager.remove(name as keyStateSchema);
                    dispatch({ type: `Delete ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <div className={className}>
            {children}
        </div>
    );
};
