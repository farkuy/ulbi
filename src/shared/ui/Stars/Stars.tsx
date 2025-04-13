import { FC, useState } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Stars.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

export interface StarsProps {
    className?: string;
    size?: number;
    rating?: number;
    onChangeRate?: (value: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const Stars: FC<StarsProps> = (props) => {
    const {
        className, size = 30, rating = 0, onChangeRate,
    } = props;
    const [starRating, setStarRating] = useState(rating);
    const [isHaveRate, setHaveRate] = useState(!!rating);

    const onHover = (star: number) => {
        if (!isHaveRate) setStarRating(star);
    };

    const onLeave = () => {
        if (!isHaveRate) setStarRating(0);
    };

    const onSelectRate = (star: number) => {
        if (!isHaveRate) {
            setStarRating(star);
            setHaveRate(true);
            onChangeRate?.(star);
        }
    };

    return (
        <div
            className={classNames(cls.Stars, {}, [className])}
            onMouseLeave={onLeave}
        >
            {stars.map((star) => (
                <Icon
                    className={classNames(cls.Star, {
                        [cls.unSelect]: star > starRating,
                        [cls.haveRating]: isHaveRate,
                    }, [])}
                    Svg={StarIcon}
                    key={star}
                    width={size}
                    height={size}
                    onMouseEnter={() => onHover(star)}
                    onClick={() => onSelectRate(star)}
                />
            ))}
        </div>
    );
};
