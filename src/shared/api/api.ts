import axios from 'axios';
import { USER_AUTH_TOKEN } from 'shared/consts/auth';

export const $axios = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(USER_AUTH_TOKEN),
    },
});
