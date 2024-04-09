import defaultRequest from '@src/lib/axios/defaultRequest';
import { UserInformationResponse } from '@src/types/api/Signs';
import { ApiHandler } from '@src/types/common/api';

export const API_GET_USER_PROFILE = '/users';

export const getUserProfile: ApiHandler<UserInformationResponse> = async () => {
    const { data } = await defaultRequest.get<UserInformationResponse>(API_GET_USER_PROFILE);
    return data;
};
