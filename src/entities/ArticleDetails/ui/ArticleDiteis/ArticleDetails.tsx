import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchArticleDetails } from '../../model/service/fetchArticleDetails';
import { getArticleDetails } from '../../model/selectors/getArticleDetails/getArticleDetails';
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

    useEffect(() => {
        dispatch(fetchArticleDetails(+id));
    }, [dispatch, id]);

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {t('')}
            </div>
        </DynamicModuleReducer>

    );
});
