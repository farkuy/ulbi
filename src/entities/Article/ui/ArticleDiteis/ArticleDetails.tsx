import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames, useAppDispatch, useStartEffect } from '@/shared/lib';
import { DynamicModuleReducer, ReducersList } from '@/shared/lib/components/DynamicModuleReducer';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextSize, ThemeText } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';

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
            return <ArticleDetailsText key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleDetailsImage key={block.id} block={block} />;
        case ArticleBlockType.CODE:
            return <ArticleDetailsCode key={block.id} block={block} />;
        default: return null;
        }
    }, []);

    useStartEffect(() => dispatch(fetchArticleDetails(+id)));

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton className={cls.avatar} height={200} width={200} borderRadius="50%" />
                <Skeleton className={cls.title} height={32} width={300} />
                <Skeleton className={cls.default_skeleton} height={24} width={600} />
                <Skeleton className={cls.default_skeleton} height={200} width="100%" />
                <Skeleton className={cls.default_skeleton} height={200} width="100%" />
            </div>
        );
    }

    if (error) {
        return <Text theme={ThemeText.ERROR} title={error} />;
    }

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} src={article?.img} size={250} />
                </div>
                <Text
                    className={cls.title}
                    theme={ThemeText.PRIMARY}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div style={{ marginBottom: '30px' }}>
                    <div className={cls.dopInfo}>
                        <Icon Svg={CalendarIcon} />
                        <Text title={article?.createdAt} size={TextSize.M} />
                    </div>
                    <div className={cls.dopInfo}>
                        <Icon Svg={EyeIcon} />
                        <Text title={String(article?.views)} size={TextSize.M} />
                    </div>
                </div>
                {article?.blocks.map(renderBlock)}
            </div>
        </DynamicModuleReducer>

    );
});
