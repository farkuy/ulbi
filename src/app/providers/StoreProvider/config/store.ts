import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { counterReducer } from '@/entities/Counter/model/slice/counterSlice';
import { userReducer } from '@/entities/User';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { $axios } from '@/shared/api/api';
import { scrollSaveReducer } from '@/features/SaveScrollPosition';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
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
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reduceManager = reduceManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
