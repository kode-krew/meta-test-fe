import axios from 'axios';
import { getCookie } from 'cookies-next';

const defaultRequest = axios.create({
    baseURL: process.env.META_TEST_SERVER_HOST_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

defaultRequest.interceptors.response.use(
    async (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            const refreshToken = getCookie('refreshToken');

            if (!refreshToken) {
                await alert('로그인이 필요합니다. 로그인 해 주세요.');
                return Promise.reject(error);
            }

            try {
                const response = await defaultRequest.get('/oauth2/renew-token', {
                    headers: {
                        'Authorization-Refresh': refreshToken,
                    },
                });

                // 토큰 갱신 성공 시 새로운 토큰으로 요청 재시도
                defaultRequest.defaults.headers.Authorization = response.headers.authorization;
                return await defaultRequest.request(error.config);
            } catch (refreshError) {
                // 토큰 갱신에 실패하면 에러 반환
                await alert('토큰 갱신에 실패했습니다. 재 로그인 해 주세요.');
                return Promise.reject(refreshError);
            }
        }

        // 401 상태 코드가 아닌 경우에는 그대로 오류 반환
        return Promise.reject(error);
    },
);

export default defaultRequest;
