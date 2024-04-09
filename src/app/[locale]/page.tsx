import React from 'react';
import { ModalService } from '@src/components/common/modal/ModalService';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeLoginModalScreen from '@src/components/screens/home/components/HomeLoginModalScreen';
import HomeQuizSelectScreen from '@src/components/screens/home/components/HomeQuizSelectScreen';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const HomePage = () => {
    // TODO 추후 토스트 사용 시 추가.
    // const toastService = ToastService.getInstance();

    // const { push } = useRouter();

    const handleQuizModal = () => {
        // TODO 추후 토스트 사용 시 추가.
        // toastService.addToast('토스트!');
        // modalService.openModal(
        //     <HomeQuizSelectScreen
        //         testId="quiz-modal"
        //         onClickButton={() => {
        //             modalService.closeModal();
        //         }}
        //     />,
        // );
    };

    // const buttonText = token ? '마이페이지' : '로그인 / 회원가입';

    return (
        <div className="w-screen">
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton />
        </div>
    );
};

export default HomePage;
