import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib';
import { DynamicModuleReducer, ReducersList } from '@/shared/lib/components/DynamicModuleReducer';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import { ArticleRecomend } from '@/features/ArticleRecomend';
import { DetailsComments } from './DetailsComments/DetailsComments';
import { PageHeader } from '../ui/PageHeader/PageHeader';
import { articleDetailsPageReducer } from '../model/slice';
import cls from './ArticlesDetailsPage.module.scss';
import { RateArticle } from '@/features/RateArticle';

const initialReducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticlesDetailsPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

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
                <RateArticle articleId={id} />
                <ArticleDetails id={id} />
                <ArticleRecomend />
                <DetailsComments id={id} />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesDetailsPage);
