import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/ArticleDetails';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddComment } from 'features/AddComment';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { sendArticleComment } from '../model/service/fetchCooments/sendArticleComment';
import {
    getArticleDetailsCommentLoading,
} from '../model/selectors/getArticleDetailsCommentInfo/getArticleDetailsCommentInfo';
import { fetchCommentsByArticleId } from '../model/service/fetchCooments/fetchComments';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentSlice';
import cls from './ArticlesDetailsPage.module.scss';

const initialReducer: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticlesDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleDetailsCommentLoading);
    const dispatch = useAppDispatch();

    useStartEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback(async (text: string) => {
        console.log(2, text);
        await dispatch(sendArticleComment(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                {t('Article_Not_Found')}
            </div>
        );
    }

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                <ArticleDetails id={id} />
                <AddComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={!!commentsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesDetailsPage);
