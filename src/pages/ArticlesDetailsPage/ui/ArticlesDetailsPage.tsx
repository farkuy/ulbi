import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { AddComment } from 'features/AddComment';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PageHeader } from '../ui/PageHeader/PageHeader';
import { articleDetailsPageReducer } from '../model/slice';
import { fetchArticleRecommend } from '../model/service/fetchArticleRecommend/fetchArticleRecommend';
import { getArticleRecommendLoading } from '../model/selectors/getArticleRecommends/getArticleRecommends';
import { sendArticleComment } from '../model/service/fetchCooments/sendArticleComment';
import {
    getArticleDetailsCommentLoading,
} from '../model/selectors/getArticleDetailsCommentInfo/getArticleDetailsCommentInfo';
import { fetchCommentsByArticleId } from '../model/service/fetchCooments/fetchComments';
import { getArticleComments } from '../model/slice/articleDetailsCommentSlice';
import cls from './ArticlesDetailsPage.module.scss';
import { getArticleRecommend } from '../model/slice/articleDetailsRecommendationSlice';

const initialReducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticlesDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleDetailsCommentLoading);
    const recommends = useSelector(getArticleRecommend.selectAll);
    const recommendsLoading = useSelector(getArticleRecommendLoading);
    const dispatch = useAppDispatch();

    useStartEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommend());
    });

    const onSendComment = useCallback(async (text: string) => {
        await dispatch(sendArticleComment(text));
    }, [dispatch]);

    if (!id) {
        return (
            <PageWrapper className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                {t('Article_Not_Found')}
            </PageWrapper>
        );
    }

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <PageWrapper className={classNames(cls.ArticlesDetailsPage, {}, [])}>
                <PageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} title={t('RECOMMEND')} />
                <ArticleList
                    className={cls.recommends}
                    view={ArticleView.SMALL}
                    articles={recommends || []}
                    isLoading={recommendsLoading}
                    /* eslint-disable-next-line i18next/no-literal-string */
                    target="_blank"
                />
                <Text size={TextSize.L} title={t('COMMENT')} />
                <AddComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={!!commentsLoading}
                    comments={comments}
                />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesDetailsPage);
