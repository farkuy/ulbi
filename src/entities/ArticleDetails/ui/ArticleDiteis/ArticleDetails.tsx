import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleDetails } from '../../model/service/fetchArticleDetails';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading } from '../../model/selectors/getArticle/getArticle';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const initialReducer: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articleDetails = useSelector(getArticleDetails);
    const articleDetailsError = useSelector(getArticleDetailsError);
    const articleDetailsLoading = useSelector(getArticleDetailsLoading);

    useEffect(() => {
        dispatch(fetchArticleDetails(+id));
    }, [dispatch, id]);

    if (true) {
        return <Skeleton height={100} width={100} borderRadius="50%" />;
    }

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {t('')}
            </div>
        </DynamicModuleReducer>

    );
});
