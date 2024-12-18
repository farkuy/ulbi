import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Необязательные стейты
    login?: LoginSchema,
    profile?: ProfileSchema,
}

export type keyStateSchema = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: keyStateSchema, reducer: Reducer) => void;
    remove: (key: keyStateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reduceManager: ReducerManager;
}

export interface ThunkAPI {

}
