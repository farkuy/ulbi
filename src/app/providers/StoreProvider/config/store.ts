import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $axios } from 'shared/api/api';
import { CombinedState } from 'redux';
import { scrollSaveReducer } from 'features/SaveScrollPosition';
import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
    };

    const reduceManager = createReducerManager(rootReducer);

    const extraArg = {
        api: $axios,
    };

    const store = configureStore({
        reducer: reduceManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reduceManager = reduceManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
