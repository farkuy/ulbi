import axios from 'axios';
import { USER_AUTH_TOKEN } from '@/shared/consts/auth';

export const $axios = axios.create({
    baseURL: __API__,
});

$axios.interceptors.request.use((config) => {
    if (config.headers) config.headers.Authorization = localStorage.getItem(USER_AUTH_TOKEN);
    return config;
});
