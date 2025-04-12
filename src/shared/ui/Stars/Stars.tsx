import { FC, useState } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Stars.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

/* Сделать кол-во уже выбранных звезв если такое есть
* Логику нажатия на звезду
* размер этих звезд
* */
interface StarsProps {
    className?: string;
    size?: number;
    rating?: number
}

const stars = [1, 2, 3, 4, 5];

export const Stars: FC<StarsProps> = (props) => {
    const { className, size = 30, rating = 0 } = props;
    const [starRating, setStarRating] = useState(rating);
    const [isHaveRate, setHaveRate] = useState(!!rating);

    const onHover = (index: number) => {
        if (!isHaveRate) setStarRating(index);
    };

    const onLeave = () => {
        if (!isHaveRate) setStarRating(0);
    };

    const onSelectRate = (index: number) => {
        if (!isHaveRate) setStarRating(index);
        setHaveRate(true);
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
                        [cls.haveRating]: !!rating,
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
