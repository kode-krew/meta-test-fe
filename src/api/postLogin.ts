import defaultRequest from '@src/lib/axios/defaultRequest';
import { UserInformationResponse } from '@src/types/api/Signs';

interface PostLoginBody {
    email: string;
    password: string;
}

export const postLogin = async (body: PostLoginBody) => {
    const data = await defaultRequest.post<UserInformationResponse>('/auth/token', { ...body });
    return data;
};
