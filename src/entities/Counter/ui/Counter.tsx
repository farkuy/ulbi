import React, { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export const Counter:FC<CounterProps> = (props) => {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => { dispatch(counterActions.increment()); };
    const decrement = () => { dispatch(counterActions.decrement()); };
    return (
        <div>
            <h1>
                value =
                {count}
            </h1>
            <Button onClick={increment}>inc</Button>
            <Button onClick={decrement}>dec</Button>

        </div>
    );
};
