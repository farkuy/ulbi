import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, useAppDispatch, useStartEffect } from '@/shared/lib';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { AddComment } from '@/features/AddComment';
import { CommentList } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../../model/service/fetchCooments/fetchComments';
import { sendArticleComment } from '../../model/service/fetchCooments/sendArticleComment';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import {
    getArticleDetailsCommentLoading,
} from '../../model/selectors/getArticleDetailsCommentInfo/getArticleDetailsCommentInfo';

interface DetailsCommentsProps {
    className?: string;
    id?: string;
}

export const DetailsComments: FC<DetailsCommentsProps> = (props) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useStartEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(getArticleDetailsCommentLoading);

    const onSendComment = useCallback(async (text: string) => {
        await dispatch(sendArticleComment(text));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('COMMENT')} />
            <AddComment onSendComment={onSendComment} />
            <CommentList
                isLoading={!!commentsLoading}
                comments={comments}
            />
        </div>
    );
};
