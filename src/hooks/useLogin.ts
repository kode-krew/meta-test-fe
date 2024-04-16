import { useEffect, useLayoutEffect, useState } from 'react';
import { API_GET_GOOGLE_LOGIN, getGoogleLogin } from '@src/api/getGoogleLogin';
import { API_GET_KAKAKO_LOGIN, getKakaoLogin } from '@src/api/getKakaoLogin';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { useQuery } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';

const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { replace } = useRouter();
    const { get } = useSearchParams();
    const token = getCookie('refreshToken');
    const code = get('code');

    const googleLogin = useQuery({
        queryFn: () => getGoogleLogin({ code: String(code) }),
        queryKey: [API_GET_GOOGLE_LOGIN],
        enabled: !!code,
    });
    const kakaoLogin = useQuery({
        queryFn: () => getKakaoLogin({ code: String(code) }),
        queryKey: [API_GET_KAKAKO_LOGIN],
        enabled: !!code,
    });

    useEffect(() => {
        async function kakaoLoginProcess() {
            if (kakaoLogin.data) {
                const accessToken = kakaoLogin.data.headers.access_token;
                const refreshToken = kakaoLogin.data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                await setIsLogin(true);
                replace('/');
            }
        }
        kakaoLoginProcess();
    }, [kakaoLogin.data, replace]);
    useEffect(() => {
        async function googleLoginProcess() {
            if (googleLogin.data) {
                const accessToken = googleLogin.data.headers.access_token;
                const refreshToken = googleLogin.data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                await setIsLogin(true);
                replace('/');
            }
        }
        googleLoginProcess();
    }, [googleLogin.data, replace]);

    useLayoutEffect(() => {
        setIsLogin(!!token);
    }, [token]);

    return {
        isLogin,
        setIsLogin,
    };
};

export default useLogin;
