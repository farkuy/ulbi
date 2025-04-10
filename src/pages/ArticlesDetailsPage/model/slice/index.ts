import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from '@/pages/ArticlesDetailsPage';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleRecommendsReducer } from './articleDetailsRecommendationSlice';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendation: articleRecommendsReducer,
});
