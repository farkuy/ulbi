import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleDetailsImage.module.scss';
import { ArticleImageBlock } from '../../../../model/types/article';

interface ArticleDetailsImageProps {
    className?: string;
    block: ArticleImageBlock;

}

export const ArticleDetailsImage = memo((props: ArticleDetailsImageProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleDetailsImage, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {
                block.title && <Text title={block.title} className={cls.title} />
            }
        </div>
    );
});
