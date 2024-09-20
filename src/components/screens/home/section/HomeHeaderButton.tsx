'use client';
import Button from '@src/components/common/Button';
import { ModalService } from '@src/service/ModalService';
import { useCallback } from 'react';
import HomeLoginModalScreen from '../components/login/HomeLoginModalScreen';
import { useRouter } from 'next/navigation';

interface HomeHeaderButtonProps {
    isLogin: boolean;
}

const HomeHeaderButton = ({ isLogin }: HomeHeaderButtonProps) => {
    const { push } = useRouter();
    const modalService = ModalService.getInstance();

    const onClickLoginButton = useCallback(() => {
        if (isLogin) {
            push('/my-page');
            return;
        }
        modalService.openModal(<HomeLoginModalScreen />);
    }, [isLogin, modalService, push]);

    return (
        <div>
            <Button onClick={onClickLoginButton} variant="secondary">
                <span>{isLogin ? '마이페이지' : '로그인 / 회원가입'}</span>
            </Button>
        </div>
    );
};

export default HomeHeaderButton;
