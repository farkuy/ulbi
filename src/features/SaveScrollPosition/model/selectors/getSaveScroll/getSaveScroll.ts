import { keyStateSchema, StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getSaveScroll = (state: StateSchema) => state?.scrollSave?.scrollSave || {};

export const getScrollValueByKey = (
    state: StateSchema,
    key: keyStateSchema,
): number | undefined => state?.scrollSave?.scrollSave?.[key];
