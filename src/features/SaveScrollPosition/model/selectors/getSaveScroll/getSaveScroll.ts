import { keyStateSchema, StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getSaveScroll = (state: StateSchema) => state?.scrollSave?.scrollSave || {};

export const getScrollValueByKey = (
    state: StateSchema,
    key: keyStateSchema,
): number => state?.scrollSave?.scrollSave?.[key] ?? 0;
