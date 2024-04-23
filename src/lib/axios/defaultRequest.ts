import axios from 'axios';
import { getCookie } from 'cookies-next';

const defaultRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

let retryCount = 0; // 재시도 횟수 추적 변수
const maxRetries = 1; // 최대 재시도 횟수

defaultRequest.interceptors.response.use(
    async (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            const refreshToken = getCookie('refreshToken');
            if (!refreshToken) {
                await alert('로그인이 필요합니다. 로그인 해 주세요.');
                window.location.href = '/';
                return Promise.reject(error);
            }

            if (retryCount < maxRetries) {
                retryCount += 1;
                try {
                    const response = await defaultRequest.post('/auth/token/refresh', {
                        refresh_token: refreshToken,
                    });
                    const accessToken = response.headers.access_token;
                    defaultRequest.defaults.headers.Authorization = `Bearer ${accessToken}`;
                    await defaultRequest.request(error.config);
                } catch (refreshError) {
                    alert('토큰 갱신에 실패했습니다. 재 로그인 해 주세요.');
                    window.location.href = '/';
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    },
);

export default defaultRequest;
