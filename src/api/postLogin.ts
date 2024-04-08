import defaultRequest from '@src/lib/axios/defaultRequest';
import { PostSignupResponse } from '@src/types/api/Signs';

interface PostLoginBody {
    email: string;
    password: string;
}

export const postLogin = async (body: PostLoginBody) => {
    const data = await defaultRequest.post<PostSignupResponse>('/auth/token', { ...body });
    return data;
};
