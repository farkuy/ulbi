import { memo } from 'react';
import { classNames } from '@/shared/lib';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleView } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui';
import cls from './ToggleArticlesView.module.scss';

interface ToggleArticlesViewProps {
    className?: string;
    view: ArticleView;
    onChangeView: (view: ArticleView) => void;
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
    const { className, view, onChangeView } = props;

    return (
        <div className={classNames(cls.ToggleArticlesView, {}, [className])}>
            {variablesView.map(({ type, svg }) => (
                <Button key={type} onClick={() => onChangeView(type)} theme={ButtonTheme.CLEAR}>
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
