import defaultRequest from '@src/lib/axios/defaultRequest';
import { UserInformationResponse } from '@src/types/api/Signs';
import axios from 'axios';

interface PostLoginBody {
    email: string;
    password: string;
}

export const postLogin = async (body: PostLoginBody) => {
    const data = await axios.post<UserInformationResponse>('/api/auth', { ...body });
    return data;
};
