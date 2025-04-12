import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RateModal.module.scss';

interface RateModalProps {
    className?: string;
}

export const RateModal: FC<RateModalProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.RateModal, {}, [className])}>
            {t('')}
        </div>
    );
};
