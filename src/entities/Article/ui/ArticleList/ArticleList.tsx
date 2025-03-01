import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
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
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view, target,
    } = props;

    const row = ({ index }: ListChildComponentProps) => {
        if (isLoading) {
            return <ArticleListItemLoading key={index} view={view} />;
        }

        const article = articles?.[index];
        return (
            <div key={index}>
                {article ? (
                    <ArticleListItem
                        article={article}
                        key={article.id}
                        view={view}
                        target={target}
                    />
                ) : null}
            </div>
        );
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles?.length ? (
                    <FixedSizeList
                        height={1500}
                        itemSize={650}
                        itemCount={isLoading ? Math.max(articles.length, 12) : articles.length} // Количество элементов
                        width="100%"

                    >
                        {row}
                    </FixedSizeList>
                ) : null
            }
            {
                isLoading && new Array(view === ArticleView.SMALL ? 12 : 6)
                    // eslint-disable-next-line react/no-array-index-key
                    .fill(0).map((val, index) => (<ArticleListItemLoading key={index} view={view} />))
            }
        </div>
    );
});
