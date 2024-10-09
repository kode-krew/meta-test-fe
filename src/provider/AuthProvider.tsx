'use client';

import { client } from '@src/api/api';
import { setAuthCookie } from '@src/app/actions/setAuthCookie';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { Middleware } from 'openapi-fetch';
import { FC, useEffect } from 'react';

interface IAuthProviderProps {
    accessToken?: string;
    refreshToken?: string;
}

let retryCount = 0;
const maxRetries = 1;

export const AuthProvider: FC<IAuthProviderProps> = ({ accessToken, refreshToken }) => {
    useEffect(() => {
        if (accessToken && refreshToken) {
            setAuthCookie({ rtk: refreshToken, atk: accessToken });
            const authMiddleware: Middleware = {
                async onRequest({ request }) {
                    // 토큰이 있을 때 Authorization 헤더 추가
                    if (accessToken) {
                        request.headers.set('Authorization', `Bearer ${accessToken}`);
                    }
                    return request;
                },
                async onResponse({ response, request }) {
                    // 401 에러 처리
                    if (response.status === 401 && retryCount < maxRetries) {
                        retryCount += 1;

                        try {
                            // 리프레시 토큰을 사용해 새로운 액세스 토큰 요청
                            const tokenResponse = await client.POST('/auth/token/refresh', {
                                body: { refresh_token: refreshToken },
                            });
                            const newAccessToken = tokenResponse.data?.access_token;

                            if (newAccessToken) {
                                // Authorization 헤더에 새 토큰 추가
                                request.headers.set('Authorization', `Bearer ${newAccessToken}`);

                                // 토큰 쿠키에 저장
                                setAuthCookie({ rtk: refreshToken, atk: newAccessToken });

                                // 원래 요청을 다시 시도
                                return response;
                            }
                        } catch (error) {
                            console.error('토큰 갱신 실패:', error);
                            return Promise.reject(error);
                        }
                    }

                    return response;
                },
            };

            // client에 미들웨어 추가
            client.use(authMiddleware);
        }
    }, [accessToken, refreshToken]);

    useEffect(() => {
        defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }, [accessToken]);

    return <></>;
};
