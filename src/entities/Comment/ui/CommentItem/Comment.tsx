import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './Comment.module.scss';
import { Comment as CommentUser } from '../../model/types/comment';

interface CommentProps {
    className?: string;
    comment: CommentUser;
    isLoading: boolean;
}

export const Comment = memo((props: CommentProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.Comment, {}, [className])}>
                <div className={cls.userInfo}>
                    <Skeleton height={40} width={40} borderRadius="50%" />
                    <Skeleton height={20} width={100} />
                </div>
                <Skeleton height={100} width="100%" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            <div className={cls.userInfo}>
                {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
