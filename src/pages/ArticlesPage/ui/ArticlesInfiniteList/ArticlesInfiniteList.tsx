import { FC } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slice/articlesPageslice';
import { getArticlesLoading, getArticlesView } from '../../model/selectors/getArticles/getArticles';
import { initeArticlesPage } from '../../model/service/initeArticlesPage';

interface ArticlesInfiniteListProps {
    className?: string;
    id: string;
}

export const ArticlesInfiniteList: FC<ArticlesInfiniteListProps> = (props) => {
    const { className, id } = props;

    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);

    useStartEffect(() => dispatch(initeArticlesPage(searchParams)));

    return (
        <ArticleList
            id={id}
            articles={articles}
            view={view || ArticleView.SMALL}
            isLoading={isLoading}
            className={className}
        />
    );
};
