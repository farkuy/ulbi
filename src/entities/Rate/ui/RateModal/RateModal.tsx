import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RateModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Stars, StarsProps } from '@/shared/ui/Stars/Stars';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface RateModalProps extends StarsProps{
    className?: string;
    size?: number;
    rating?: number;
    onAccept?: (rate: number, feedback?: string) => void;
}

export const RateModal: FC<RateModalProps> = (props) => {
    const {
        className, size, rating, onAccept,
    } = props;

    const [review, setReview] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [starRating, setStarRating] = useState(rating);

    const onFeedback = (value: string) => setReview(value);
    const closeModal = () => {
        setIsVisible(false);
        setStarRating(0);
    };
    const onClickStar = (star: number) => {
        setIsVisible(true);
        setStarRating(star);
    };
    const onSubmit = () => {
        if (starRating) onAccept?.(starRating, review);
        setIsVisible(false);
    };

    return (
        <div>
            <VStack max className={cls.rate}>
                <Text title={starRating ? 'Вы оценили' : 'Выберите рейтинг'} />
                <Stars size={size} rating={starRating} onChangeRate={onClickStar} />
            </VStack>
            <Modal
                lazy
                className={classNames(cls.RateModal, {}, [className])}
                isOpen={isVisible}
                closeModal={closeModal}
            >
                <VStack gap="16" max>
                    <Text title="Что вам понравилось?" />
                    <Input value={review} onChange={onFeedback} />
                    <HStack max gap="4">
                        <Button onClick={closeModal} theme={ButtonTheme.OUTLINE_RED}>Отменить</Button>
                        <Button onClick={onSubmit}>Отправить</Button>
                    </HStack>
                </VStack>
            </Modal>
        </div>
    );
};
