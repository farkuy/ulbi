import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';
import cls from './ArticleDetailsCode.module.scss';
import { ArticleCodeBlock } from '../../../../model/types/article';

interface ArticleDetailsCodeProps {
    className?: string;
    block: ArticleCodeBlock;

}

export const ArticleDetailsCode = memo((props: ArticleDetailsCodeProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleDetailsCode, {}, [className])}>
            <Code codeText={block.code} />
        </div>
    );
});
