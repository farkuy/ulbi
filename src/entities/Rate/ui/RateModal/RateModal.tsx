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
    onChangeRate?: () => void;
}

export const RateModal: FC<RateModalProps> = (props) => {
    const {
        className, size, rating, onChangeRate,
    } = props;

    const [review, setReview] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const onLeaveFeedback = (value: string) => setReview(value);
    const closeModal = () => setIsVisible(false);
    const onClickStar = () => {
        setIsVisible(true);
        onChangeRate?.();
    };

    return (
        <div>
            <VStack max className={cls.rate}>
                <Text title="Выберите рейтинг" />
                <Stars size={size} rating={rating} onChangeRate={onClickStar} />
            </VStack>
            <Modal
                lazy
                className={classNames(cls.RateModal, {}, [className])}
                isOpen={isVisible}
                closeModal={closeModal}
            >
                <VStack gap="16" max>
                    <Text title="Что вам понравилось?" />
                    <Input value={review} onChange={onLeaveFeedback} />
                    <HStack max gap="4">
                        <Button theme={ButtonTheme.OUTLINE_RED}>Отменить</Button>
                        <Button>Отправить</Button>
                    </HStack>
                </VStack>
            </Modal>
        </div>
    );
};
