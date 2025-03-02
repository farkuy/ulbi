import { classNames } from 'shared/lib/classNames/classNames';
import {
    HTMLAttributeAnchorTarget, memo, useCallback, useRef,
} from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { WindowScroller } from 'react-virtualized';
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
    const list = useRef<any>(null);
    const onScroll = useCallback(({ scrollTop }) => {
        list.current?.scrollTo(scrollTop);
    }, []);

    const row = ({ index }: ListChildComponentProps) => {
        if (isLoading) {
            return <ArticleListItemLoading key={index} view={view} />;
        }

        const article = articles?.[index];
        return (
            <div key={article?.id}>
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
                    <WindowScroller onScroll={onScroll}>
                        {({
                            height, scrollTop, width,
                        }) => (
                            <FixedSizeList
                                ref={list}
                                itemSize={700}
                                itemCount={articles.length}
                                width="100%"
                                height={height}
                                scrollTop={scrollTop}
                                style={{ height: '100% !important' }}
                            >
                                {row}
                            </FixedSizeList>
                        )}
                    </WindowScroller>

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
