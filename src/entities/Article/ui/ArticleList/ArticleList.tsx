import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

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

    /* if (isLoading) {
        return (new Array(9).fill(0).map((val) => <ArticleListItem />));
    } */

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles?.length ? articles.map((art) => (
                    <ArticleListItem
                        article={art}
                        key={art.id}
                        view={view}
                    />
                )) : null
            }
        </div>
    );
});
