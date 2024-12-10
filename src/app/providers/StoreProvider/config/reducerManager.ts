import { combineReducers, PayloadAction, ReducersMapObject } from '@reduxjs/toolkit';
import { keyStateSchema, StateSchema } from './stateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: keyStateSchema[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: , action: PayloadAction<any>) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: keyStateSchema) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
