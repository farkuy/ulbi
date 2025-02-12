import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router';
import { ArticleSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticlesDetailsPage';
import { AddCommentSchema } from 'features/AddComment';
import { ArticlesPagesSchema } from 'pages/ArticlesPage';
import { SaveScrollSchema } from 'features/SaveScrollPosition';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: SaveScrollSchema

    // Необязательные стейты
    login?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleSchema,
    articleDetailsComments?: ArticleDetailsCommentSchema,
    addComment?: AddCommentSchema,
    articlesPage?: ArticlesPagesSchema,
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

interface ThunkAPI {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {rejectValue: T, extra: ThunkAPI, state: StateSchema}
