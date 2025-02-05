import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesView } from 'pages/ArticlesPage/model/selectors/getArticles/getArticles';
import { ArticleView } from 'entities/Article';
import { articlesAction } from 'pages/ArticlesPage/model/slice/articlesPageslice';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ToggleArticlesView.module.scss';

interface ToggleArticlesViewProps {
    className?: string;
}

const variablesView = [
    {
        type: ArticleView.BIG,
        svg: ListIcon,
    },
    {
        type: ArticleView.SMALL,
        svg: TiledIcon,
    },
];

export const ToggleArticlesView = memo((props: ToggleArticlesViewProps) => {
    const { className } = props;
    const view = useSelector(getArticlesView);
    const dispatch = useAppDispatch();

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesAction.setView(view));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ToggleArticlesView, {}, [className])}>
            {variablesView.map(({ type, svg }) => (
                <Button onClick={() => onChangeView(type)} theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={svg}
                        key={type}
                        className={classNames(type === view ? cls.select_icon : cls.un_select_icon)}
                    />
                </Button>

            ))}
        </div>
    );
});
