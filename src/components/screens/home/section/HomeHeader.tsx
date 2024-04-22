'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';
import Button from '@src/components/common/Button';
import { ModalService } from '@src/service/ModalService';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import HomeLoginModalScreen from '../components/login/HomeLoginModalScreen';

interface HomeHeaderProps {
    isLoginSns: boolean;
}

const HomeHeader: FC<HomeHeaderProps> = ({ isLoginSns }) => {
    const { push } = useRouter();
    const modalService = ModalService.getInstance();
    const [isLoginNormal, setIsLoginNormal] = useState(false);

    const onSuccessLogin = useCallback(() => {
        setIsLoginNormal(true);
    }, []);

    const isLogin = useMemo(() => isLoginNormal || isLoginSns, [isLoginNormal, isLoginSns]);

    const onClickLoginButton = useCallback(() => {
        if (isLoginNormal || isLoginSns) {
            push('/my-page');
            return;
        }
        modalService.openModal(<HomeLoginModalScreen onSuccessLogin={onSuccessLogin} />);
    }, [isLoginNormal, isLoginSns, modalService, onSuccessLogin, push]);

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
