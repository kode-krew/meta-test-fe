import defaultRequest from '@src/lib/axios/defaultRequest';
import { ApiHandler } from '@src/types/common/api';
import { AxiosResponse } from 'axios';

interface GetKakaoLoginParameter {
    code: string;
}

export const API_GET_KAKAKO_LOGIN = '/auth/login/kakao';

export const getKakaoLogin: ApiHandler<AxiosResponse, GetKakaoLoginParameter> = async (params) => {
    const data = await defaultRequest.get<AxiosResponse>(API_GET_KAKAKO_LOGIN, {
        params,
    });
    return data;
};
