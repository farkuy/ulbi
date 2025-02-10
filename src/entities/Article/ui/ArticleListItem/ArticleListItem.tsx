import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Article, ArticleView } from 'entities/Article';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Container } from 'shared/ui/Container/Container';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleDetailsText } from '../../ui/ArticleDiteis/ui/ArticleDetailsText/ArticleDetailsText';
import { ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    isLoading?: boolean;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, isLoading,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const createdAt = <Text text={article.user.username} className={cls.createdAt} />;
    const tags = useMemo(() => (
        <div className={cls.tags}>
            {article.type.map((typ) => (
                <p key={typ}>{typ}</p>
            ))}
        </div>
    ), [article.type]);

    const goArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article]);

    if (view === ArticleView.BIG) {
        const firstBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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
                        <Button onClick={goArticle}>{t('Читать далле')}</Button>
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
        <div onClick={goArticle} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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

        </div>
    );
});
