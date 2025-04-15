import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export const Counter:FC<CounterProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => { dispatch(counterActions.increment()); };
    const decrement = () => { dispatch(counterActions.decrement()); };
    return (
        <div>
            <h1 data-testid="value-title">
                {count}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('inc')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('dec')}</Button>
        </div>
    );
};
