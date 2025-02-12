import { keyStateSchema } from 'app/providers/StoreProvider';

export type SaveScroll = Record<keyStateSchema, number>;

export interface SaveScrollSchema {
    scrollSave: Partial<SaveScroll>
}
