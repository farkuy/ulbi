import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Container } from 'shared/ui/Container/Container';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Container>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <div className={cls.createdAt}>{article.createdAt}</div>
                </div>
                <div className={cls.infoWrapper}>
                    <div className={cls.tags}>
                        {article.type.map((typ) => (
                            <p>{typ}</p>
                        ))}
                    </div>
                    <div className={cls.viewsWrapper}>
                        <div>{article.views}</div>
                        <Icon Svg={EyeIcon} />
                    </div>
                </div>
                <div className={cls.title}>{article.title}</div>
            </Container>

        </div>
    );
});
