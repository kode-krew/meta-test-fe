import { useEffect, useMemo, useState } from 'react';
import { API_GET_GOOGLE_LOGIN, getGoogleLogin } from '@src/api/getGoogleLogin';
import { API_GET_KAKAKO_LOGIN, getKakaoLogin } from '@src/api/getKakaoLogin';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { ToastService } from '@src/service/ToastService';
import { useQuery } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';

export type SocialType = 'google' | 'kakao';
export interface SocialLoginInformationType {
    loginPath: string;
    socialType: SocialType;
}

const useSocialLogin = () => {
    const { push } = useRouter();
    const { get } = useSearchParams();
    const toastService = ToastService.getInstance();
    const code = get('code');
    const socialInfo = getCookie('social-login-info');

    const socialInfoObj: SocialLoginInformationType = useMemo(() => {
        if (socialInfo) return JSON.parse(socialInfo);
        return null;
    }, [socialInfo]);

    const googleLogin = useQuery({
        queryFn: () => getGoogleLogin({ code: String(code) }),
        queryKey: [API_GET_GOOGLE_LOGIN],
        enabled: !!code && socialInfoObj.socialType === 'google',
    });
    const kakaoLogin = useQuery({
        queryFn: () => getKakaoLogin({ code: String(code) }),
        queryKey: [API_GET_KAKAKO_LOGIN],
        enabled: !!code && socialInfoObj.socialType === 'kakao',
    });

    useEffect(() => {
        async function kakaoLoginProcess() {
            if (kakaoLogin.data) {
                const accessToken = kakaoLogin.data.headers.access_token;
                const refreshToken = kakaoLogin.data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                toastService.addToast('로그인 되었습니다.');
                push(socialInfoObj.loginPath ?? '/');
            }
        }
        kakaoLoginProcess();
    }, [kakaoLogin.data, push, socialInfoObj.loginPath, toastService]);
    useEffect(() => {
        async function googleLoginProcess() {
            if (googleLogin.data) {
                const accessToken = googleLogin.data.headers.access_token;
                const refreshToken = googleLogin.data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                toastService.addToast('로그인 되었습니다.');
                push(socialInfoObj.loginPath ?? '/');
            }
        }
        googleLoginProcess();
    }, [googleLogin.data, push, socialInfoObj.loginPath, toastService]);
};

export default useSocialLogin;
