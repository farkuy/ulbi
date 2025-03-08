import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../CommentItem/Comment';
import cls from './CommentList.module.scss';
import { Comment as CommentUser } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: CommentUser[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <VStack gap="16" max className={classNames(cls.CommentList, {}, [className])}>
            <Text className={cls.title} title={t('Комментарии')} size={TextSize.L} />
            { comments.length
                ? comments.map((comm) => <Comment key={comm.id} isLoading={isLoading} comment={comm} />)
                : <Text className={cls.noComment} title={t('Комментарии остутсвуют')} />}
        </VStack>
    );
});
