import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo, useMemo } from 'react';
import { Article, ArticleView } from 'entities/Article';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Container } from 'shared/ui/Container/Container';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleDetailsText } from '../../ui/ArticleDiteis/ui/ArticleDetailsText/ArticleDetailsText';
import { ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target, isLoading,
    } = props;
    const { t } = useTranslation();

    const createdAt = <Text text={article.user.username} className={cls.createdAt} />;
    const tags = useMemo(() => (
        <div className={cls.tags}>
            {article.type.map((typ) => (
                <p key={typ}>{typ}</p>
            ))}
        </div>
    ), [article.type]);

    if (view === ArticleView.BIG) {
        const firstBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls.link, cls[view]])}>
                <div className={cls.container}>
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Avatar
                                size={40}
                                src={article.user.avatar}
                                alt={article.user.username}
                            />
                            {createdAt}
                        </div>
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text text={article.title} size={TextSize.L} className={cls.title} />
                    {tags}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {firstBlock && <ArticleDetailsText block={firstBlock} className={cls.blockText} />}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.article_details + article.id}>
                            <Button>{t('Читать далле')}</Button>
                        </AppLink>
                        <div className={cls.viewsWrapper}>
                            <div>{article.views}</div>
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls.link, cls[view]])}
            target={target}
        >
            <Container className={cls.containerWrapper}>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {createdAt}
                </div>
                <div className={cls.infoWrapper}>
                    {tags}
                    <div className={cls.viewsWrapper}>
                        <div>{article.views}</div>
                        <Icon Svg={EyeIcon} />
                    </div>
                </div>
                <Text text={article.title} className={cls.title} />
            </Container>
        </AppLink>
    );
});
