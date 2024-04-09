'use client';

import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import Button from '@src/components/common/Button';
import { ModalService } from '@src/components/common/modal/ModalService';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import HomeLoginModalScreen from '../components/login/HomeLoginModalScreen';

interface HomeHeaderProps {}

const HomeHeader: FC<HomeHeaderProps> = () => {
    const { push } = useRouter();
    const modalService = ModalService.getInstance();
    const token = getCookie('refreshToken');
    const [isLogin, setIsLogin] = useState(false);

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
