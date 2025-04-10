import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router';
import { LoginSchema } from '@/features/AuthByUsername';
import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';
import { ArticleSchema } from '@/entities/Article';
import { ArticlesDetailsPageSchema } from '@/pages/ArticlesDetailsPage';
import { AddCommentSchema } from '@/features/AddComment';
import { ArticlesPagesSchema } from '@/pages/ArticlesPage';
import { SaveScrollSchema } from '@/features/SaveScrollPosition';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/edditableProfileCard/model/types/edditableProfileCard.types';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: SaveScrollSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Необязательные стейты
    login?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleSchema,
    articleDetailsPage?: ArticlesDetailsPageSchema,
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
