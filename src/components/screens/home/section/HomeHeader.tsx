'use client';

import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { API_GET_GOOGLE_LOGIN, getGoogleLogin } from '@src/api/getGoogleLogin';
import { API_GET_KAKAKO_LOGIN, getKakaoLogin } from '@src/api/getKakaoLogin';
import Button from '@src/components/common/Button';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { ModalService } from '@src/service/ModalService';
import { useQuery } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeLoginModalScreen from '../components/login/HomeLoginModalScreen';

interface HomeHeaderProps {}

const HomeHeader: FC<HomeHeaderProps> = () => {
    const { push, replace } = useRouter();
    const { get } = useSearchParams();
    const modalService = ModalService.getInstance();
    const token = getCookie('refreshToken');
    const [isLogin, setIsLogin] = useState(false);
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

    const onSuccessLogin = () => {
        setIsLogin(true);
    };

    const onClickLoginButton = useCallback(() => {
        if (isLogin) {
            push('/my-page');
            return;
        }
        modalService.openModal(<HomeLoginModalScreen onSuccessLogin={onSuccessLogin} />);
    }, [isLogin, modalService, push]);

    useLayoutEffect(() => {
        setIsLogin(!!token);
    }, [token]);

    return (
        <header className="m-5 flex flex-row-reverse">
            <div>
                <Button onClick={onClickLoginButton} variant="secondary">
                    {isLogin ? '마이페이지' : '로그인 / 회원가입'}
                </Button>
            </div>
        </header>
    );
};

export default React.memo(HomeHeader);
