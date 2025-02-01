import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleReducer, ReducersList } from 'shared/lib/components/DynamicModuleReducer';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getAddCommentError, getAddCommentText } from '../model/selector/getComment/getComment';
import cls from './AddComment.module.scss';
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice';

interface AddCommentProps {
    onSendComment: (text: string) => void;
}

const initialReducer: ReducersList = {
    addComment: addCommentReducer,
};
export const AddComment = memo((props: AddCommentProps) => {
    const { onSendComment } = props;
    const { t } = useTranslation();

    const commentText = useSelector(getAddCommentText);
    const commentError = useSelector(getAddCommentError);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentActions.setText(text));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(commentText || '');
        onCommentTextChange('');
    }, [onSendComment, commentText]);

    return (
        <div style={{ padding: 20 }}>
            <DynamicModuleReducer reducers={initialReducer} deleteWithUnmount>
                <Text className={cls.title} title={t('ADD_COMMENT')} />
                <div className={classNames(cls.AddComment, {}, [])}>
                    <Input className={cls.input} value={commentText ?? ''} onChange={onCommentTextChange} />
                    <Button onClick={onSendHandler}>{t('ADD_COMMENT')}</Button>
                </div>
            </DynamicModuleReducer>
        </div>
    );
});
