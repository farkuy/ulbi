import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider';
import { getReadonly } from './getReadonly';

describe('getReadonly', () => {
    test('getReadonly return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getReadonly(state as StateSchema)).toEqual(false);
    });
    test('getReadonly not return', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getReadonly(state as StateSchema)).toBeUndefined();
    });
});
