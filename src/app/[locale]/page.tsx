'use client';

import React, { useCallback } from 'react';
import { ModalService } from '@src/components/common/modal/ModalService';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeLoginModalScreen from '@src/components/screens/home/components/HomeLoginModalScreen';
import HomeQuizSelectScreen from '@src/components/screens/home/components/HomeQuizSelectScreen';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';

const HomePage = () => {
    // TODO 추후 토스트 사용 시 추가.
    // const toastService = ToastService.getInstance();
    const modalService = ModalService.getInstance();

    const handleQuizModal = useCallback(() => {
        // TODO 추후 토스트 사용 시 추가.
        // toastService.addToast('토스트!');
        modalService.openModal(
            <HomeQuizSelectScreen
                testId="quiz-modal"
                onClickButton={() => {
                    modalService.closeModal();
                }}
            />,
        );
    }, [modalService]);
    const handleLoginModal = () => {
        modalService.openModal(<HomeLoginModalScreen />);
    };

    return (
        <div className="w-screen">
            <HomeHeader onClickLoginButton={handleLoginModal} />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton onClick={handleQuizModal} />
        </div>
    );
};

export default React.memo(HomePage);
