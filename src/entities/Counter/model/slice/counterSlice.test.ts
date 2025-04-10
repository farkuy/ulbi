import { CounterSchema } from '@/entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    const state: CounterSchema = {
        value: 10,
    };
    test('decrement', () => {
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment', () => {
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });

    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
