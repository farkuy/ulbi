import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../../../model/types/article';
import cls from './ArticleDetailsText.module.scss';

interface ArticleDetailsTextProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleDetailsText = memo((props:ArticleDetailsTextProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleDetailsText, {}, [className])}>
            <Text title={block.title} className={cls.title} />
            {
                block.paragraphs.map((blc) => (
                    <Text text={blc} key={blc} className={cls.ident} />
                ))
            }
        </div>
    );
});
