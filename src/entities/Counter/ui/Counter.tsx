import React, { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

interface CounterProps {
    className?: string;
}

export const Counter:FC<CounterProps> = (props) => {
    const count = useSelector((state: StateSchema) => state.counter.value);
    const dispatch = useDispatch();
    const increment = () => { dispatch(increment()); };
    const decrement = () => { dispatch(decrement()); };
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
