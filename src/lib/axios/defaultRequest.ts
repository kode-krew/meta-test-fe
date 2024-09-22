import { AuthService } from '@src/service/AuthService';
import axios from 'axios';
import { Cookies } from 'react-cookie';

// const authService = AuthService.getInstance();

const defaultRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL,
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${authService.getAccessToken()}`, // 초기 토큰 설정
    },
    withCredentials: true,
});

let retryCount = 0; // 재시도 횟수 추적 변수
const maxRetries = 1; // 최대 재시도 횟수

const cookies = new Cookies();
defaultRequest.interceptors.response.use(
    async (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            if (retryCount < maxRetries) {
                retryCount += 1;
                try {
                    const response = await defaultRequest.post('/auth/token/refresh');
                    const accessToken = response.headers.access_token;
                    defaultRequest.defaults.headers.Authorization = `Bearer ${accessToken}`;
                    // authService.setAccessToken(accessToken); // 갱신된 토큰을 AuthService에 전달
                    await defaultRequest.request(error.config);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    },
);

export default defaultRequest;
