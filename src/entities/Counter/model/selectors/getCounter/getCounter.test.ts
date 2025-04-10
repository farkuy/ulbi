import { StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';
import { DeepPartial } from '@/shared/types/DeepPartial';
import { getCounter } from '../../../model/selectors/getCounter/getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
