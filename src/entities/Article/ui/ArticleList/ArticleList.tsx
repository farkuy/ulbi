import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItemLoading } from '../ArticleListItem/ArticleListItemLoading';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view,
    } = props;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles?.length ? articles.map((art) => (
                    <ArticleListItem
                        article={art}
                        key={art.id}
                        view={view}
                        isLoading
                    />
                )) : null
            }
            {
                isLoading && new Array(view === ArticleView.SMALL ? 12 : 6)
                    .fill(0).map((val) => (<ArticleListItemLoading view={view} />))
            }
        </div>
    );
});
