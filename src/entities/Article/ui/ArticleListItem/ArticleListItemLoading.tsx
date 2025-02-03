import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
        <></>
    );
});
