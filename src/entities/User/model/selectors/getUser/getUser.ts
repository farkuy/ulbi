import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getUser = (state: StateSchema) => state.user.authData;
