import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Avatar, VStack, AppLink } from '@/shared/ui';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './Comment.module.scss';
import { Comment as CommentUser } from '../../model/types/comment';
import { RoutePath } from '@/shared/consts';

interface CommentProps {
    className?: string;
    comment: CommentUser;
    isLoading: boolean;
}

export const Comment = memo((props: CommentProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack max gap="8" className={classNames(cls.Comment, {}, [className])}>
                <VStack max gap="8" className={cls.userInfo}>
                    <Skeleton height={40} width={40} borderRadius="50%" />
                    <Skeleton height={20} width={100} />
                </VStack>
                <Skeleton height={100} width="100%" />
            </VStack>
        );
    }

    return (
        <VStack max gap="8" className={classNames(cls.Comment, {}, [className])}>
            <AppLink
                className={cls.userInfo}
                to={`${RoutePath.profile}${comment.user.id}`}
            >
                {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
