import { StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

export const getAddCommentText = (state: StateSchema) => state.addComment?.text;
export const getAddCommentError = (state: StateSchema) => state.addComment?.error;
