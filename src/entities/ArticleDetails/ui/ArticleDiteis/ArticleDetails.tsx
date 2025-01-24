import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize, ThemeText } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleDetailsCode } from '../../ui/ArticleDiteis/ui/ArticleDetailsCode/ArticleDetailsCode';
import { ArticleDetailsText } from '../../ui/ArticleDiteis/ui/ArticleDetailsText/ArticleDetailsText';
import { ArticleDetailsImage } from '../../ui/ArticleDiteis/ui/ArticleDetailsImage/ArticleDetailsImage';
import { ArticleBlocks, ArticleBlockType } from '../../model/types/article';
import { fetchArticleDetails } from '../../model/service/fetchArticleDetails';
import {
    getArticleDetails,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/getArticle/getArticle';
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

    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetails);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsLoading);

    const renderBlock = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleDetailsText />;
        case ArticleBlockType.IMAGE:
            return <ArticleDetailsImage />;
        case ArticleBlockType.CODE:
            return <ArticleDetailsCode />;
        default: return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleDetails(+id));
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <>
                <Skeleton className={cls.avatar} height={200} width={200} borderRadius="50%" />
                <Skeleton className={cls.title} height={32} width={300} />
                <Skeleton className={cls.default_skeleton} height={24} width={600} />
                <Skeleton className={cls.default_skeleton} height={200} width="100%" />
                <Skeleton className={cls.default_skeleton} height={200} width="100%" />
            </>
        );
    }

    if (error) {
        return <Text theme={ThemeText.ERROR} title={error} />;
    }

    console.log(article);
    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} src={article?.img} size={250} />
                </div>
                <Text theme={ThemeText.PRIMARY} title={article?.title} text={article?.subtitle} size={TextSize.XL} />
                {article?.blocks.map(renderBlock)}
            </div>
        </DynamicModuleReducer>

    );
});
