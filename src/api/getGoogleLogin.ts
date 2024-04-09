import defaultRequest from '@src/lib/axios/defaultRequest';
import { ApiHandler } from '@src/types/common/api';
import { AxiosResponse } from 'axios';

interface GetGoogleLoginParameter {
    code: string;
}

export const API_GET_GOOGLE_LOGIN = '/auth/login/google';

export const getGoogleLogin: ApiHandler<AxiosResponse, GetGoogleLoginParameter> = async (
    params,
) => {
    const data = await defaultRequest.get<AxiosResponse>(API_GET_GOOGLE_LOGIN, {
        params,
    });
    return data;
};
