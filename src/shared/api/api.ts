import axios, { AxiosError, AxiosInstance } from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/model/consts/localstorage';

export const $api = axios.create({
    baseURL: __API__,
    // headers: {
    //     authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
    // },
});
