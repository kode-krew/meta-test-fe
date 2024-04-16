'use client';

import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { API_GET_GOOGLE_LOGIN, getGoogleLogin } from '@src/api/getGoogleLogin';
import { API_GET_KAKAKO_LOGIN, getKakaoLogin } from '@src/api/getKakaoLogin';
import Button from '@src/components/common/Button';
import useLogin from '@src/hooks/useLogin';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { ModalService } from '@src/service/ModalService';
import { useQuery } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeLoginModalScreen from '../components/login/HomeLoginModalScreen';

interface HomeHeaderProps {}

const HomeHeader: FC<HomeHeaderProps> = () => {
    const { push } = useRouter();
    const modalService = ModalService.getInstance();
    const { isLogin, setIsLogin } = useLogin();

    const onSuccessLogin = useCallback(() => {
        setIsLogin(true);
    }, [setIsLogin]);

    const onClickLoginButton = useCallback(() => {
        if (isLogin) {
            push('/my-page');
            return;
        }
        modalService.openModal(<HomeLoginModalScreen onSuccessLogin={onSuccessLogin} />);
    }, [isLogin, modalService, onSuccessLogin, push]);

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
