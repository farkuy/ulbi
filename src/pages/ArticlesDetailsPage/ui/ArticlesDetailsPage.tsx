import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ArticleRecomend } from 'features/ArticleRecomend';
import { DetailsComments } from './DetailsComments/DetailsComments';
import { PageHeader } from '../ui/PageHeader/PageHeader';
import { articleDetailsPageReducer } from '../model/slice';
import cls from './ArticlesDetailsPage.module.scss';

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
                <ArticleDetails id={id} />
                <ArticleRecomend />
                <DetailsComments id={id} />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesDetailsPage);
