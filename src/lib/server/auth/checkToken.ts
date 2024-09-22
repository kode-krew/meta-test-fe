'use server';
import axios, { isAxiosError } from 'axios';
import { cookies } from 'next/headers';

interface LoginState {
    isLogin: boolean;
    token?: {
        access_token?: string;
        refresh_token?: string;
    };
}

const reissueToken = async (): Promise<LoginState> => {
    try {
        const { headers } = await axios.put(
            `${process.env.NEXT_PUBLIC_META_TEST_WEB_HOST_URL}/api/auth`,
            {
                headers: {
                    refreshToken: cookies().get('rtk')?.value,
                },
            },
        ); // 서버 사이드에서 토큰 재발급
        const accessToken = headers['atk'];
        const refreshToken = headers['rtk'];
        return {
            isLogin: true,
            token: {
                access_token: accessToken,
                refresh_token: refreshToken,
            },
        };
    } catch (error) {
        console.log('토큰 재발급 실패:', error);
        return {
            isLogin: false,
        };
    }
};

export const checkToken = async (accessToken?: string): Promise<LoginState> => {
    try {
        await axios.get(`${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/users`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            isLogin: true,
            token: {
                access_token: accessToken,
            },
        };
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 401) {
            return reissueToken(); // 토큰 만료 시 재발급
        }
        return { isLogin: false };
    }
};
