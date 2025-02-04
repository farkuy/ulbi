import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Container } from 'shared/ui/Container/Container';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemLoadingProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemLoading = memo((props: ArticleListItemLoadingProps) => {
    const {
        className, view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view], cls.isLoading])}>
                <div className={cls.container}>
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Skeleton
                                width={40}
                                height={40}
                                borderRadius="50%"
                            />
                            <Skeleton height={40} width={300} />
                        </div>
                        <Skeleton height={40} width={150} className={cls.createdAt} />
                    </div>
                    <Skeleton height={40} width="100%" className={cls.title} />
                    <Skeleton height={20} width={50} className={cls.img} />
                    <Skeleton height={300} width="100%" className={cls.blockText} />
                    <div className={cls.footer}>
                        <Skeleton height={40} width={200} />
                        <div className={cls.viewsWrapper}>
                            <Skeleton height={40} width={100} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Container>
                <div className={cls.imgWrapper}>
                    <Skeleton
                        width="100%"
                        height={140}
                        className={cls.img}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton
                        width={40}
                        height={15}
                    />
                    <div className={cls.viewsWrapper}>
                        <Skeleton
                            width={40}
                            height={15}
                        />
                        <Skeleton
                            width={40}
                            height={15}
                        />
                    </div>
                </div>
                <Skeleton
                    width={100}
                    height={25}
                    className={cls.title}
                />
            </Container>
        </div>
    );
});
