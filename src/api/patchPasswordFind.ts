import defaultRequest from '@src/lib/axios/defaultRequest';
import { ApiHandler } from '@src/types/common/api';
import { AxiosResponse } from 'axios';

interface PatchPasswordFindParameter {
    email: string;
}

export const patchPasswordFind: ApiHandler<AxiosResponse, PatchPasswordFindParameter> = async ({
    email,
}) => {
    const { data } = await defaultRequest.patch('/auth/password', {
        email,
    });

    return data;
};
