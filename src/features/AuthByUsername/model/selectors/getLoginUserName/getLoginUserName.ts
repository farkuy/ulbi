import { StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

export const getLoginUserName = (state: StateSchema) => state?.login?.username || '';
