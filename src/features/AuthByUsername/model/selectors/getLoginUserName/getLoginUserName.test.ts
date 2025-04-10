import { StateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/types/DeepPartial';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
    test('added username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'Вова Вист',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('Вова Вист');
    });

    test('added "" username', () => {
        const state: DeepPartial<StateSchema> = { login: undefined };
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
