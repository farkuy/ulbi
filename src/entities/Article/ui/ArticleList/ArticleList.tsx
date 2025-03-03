import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { VirtualList } from 'features/VirtualList/ui/VirtualList';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItemLoading } from '../ArticleListItem/ArticleListItemLoading';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    id?: string
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view, target, id,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.SMALL ? 12 : 6)
                // eslint-disable-next-line react/no-array-index-key
                    .fill(0).map((val, index) => (<ArticleListItemLoading key={index} view={view} />))}
            </div>
        );
    }

    return (
        <VirtualList id={id} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles && articles.map((art) => (
                <ArticleListItem
                    article={art}
                    key={art.id}
                    view={view}
                    isLoading
                    target={target}
                />
            ))}
        </VirtualList>
    );
});
