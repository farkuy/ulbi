import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, UIEvent, useCallback, useRef,
} from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useStartEffect } from 'shared/lib/hooks/useStartEffect/useStartEffect';
import { ToggleArticlesView } from 'features/ToggleArticlesView';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { getScrollValueByKey } from 'features/SaveScrollPosition';
import { StateSchema } from 'app/providers/StoreProvider';
import { initeArticlesPage } from '../model/service/initeArticlesPage';
import { getArticlesLoading, getArticlesView } from '../model/selectors/getArticles/getArticles';
import { fetchNextArticlesPage } from '../model/service/fetchNextArticlesList';
import { articlesReducer, getArticles } from '../model/slice/articlesPageslice';
import cls from './ArticlesPage.module.scss';

const initialReducer: ReducersList = {
    articlesPage: articlesReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);
    const scrollPos = useSelector((state: StateSchema) => getScrollValueByKey(state, 'articlesPage'));
    const parent = useRef<HTMLDivElement | null>(null);
    const end = useRef<HTMLDivElement | null>(null);

    const onScrollEnd = useCallback(async () => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInfiniteScroll({ callback: onScrollEnd, targetRef: end, wrapperRef: parent });

    useStartEffect(() => dispatch(initeArticlesPage()));

    const handleScroll = (e: UIEvent<HTMLElement>) => {
        const { scrollTop } = e.currentTarget; // Получаем вертикальную позицию прокрутки
        console.log(`Текущая позиция по высоте: ${scrollTop}px`);
    };

    return (
        <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount={false}>
            <PageWrapper
                onScroll={handleScroll}
                className={classNames(cls.ArticlesPage, {}, [])}
                ref={parent}
            >
                <ToggleArticlesView />
                <ArticleList articles={articles} view={view || ArticleView.SMALL} isLoading={isLoading} />
                <div ref={end} />
            </PageWrapper>
        </DynamicModuleReducer>
    );
};

export default memo(ArticlesPage);
