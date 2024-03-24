'use client';

import React, { useCallback, useState } from 'react';
import Modal from '@src/components/common/Modal';
import { ToastService } from '@src/components/common/toast/ToastService';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeLoginModalScreen from '@src/components/screens/home/components/HomeLoginModalScreen';
import HomeQuizSelectScreen from '@src/components/screens/home/components/HomeQuizSelectScreen';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';

interface ModalProps {
    isOpenQuizModal: boolean;
    isOpenLoginModal: boolean;
}

const HomePage = () => {
    // TODO 추후 토스트 사용 시 추가.
    // const toastService = ToastService.getInstance();
    const [modalProps, setModalProps] = useState<ModalProps>({
        isOpenLoginModal: false,
        isOpenQuizModal: false,
    });

    const handleQuizModal = useCallback(() => {
        // TODO 추후 토스트 사용 시 추가.
        // toastService.addToast('토스트!');
        setModalProps((prev) => ({ ...prev, isOpenQuizModal: !prev.isOpenQuizModal }));
    }, []);
    const handleLoginModal = () => {
        setModalProps((prev) => ({ ...prev, isOpenLoginModal: !prev.isOpenLoginModal }));
    };

    return (
        <div className="w-screen">
            <HomeHeader onClickLoginButton={handleLoginModal} />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton onClick={handleQuizModal} />
            {modalProps.isOpenQuizModal && (
                <Modal onClose={handleQuizModal}>
                    <HomeQuizSelectScreen testId="quiz-modal" onClickButton={handleQuizModal} />
                </Modal>
            )}
            {modalProps.isOpenLoginModal && (
                <Modal onClose={handleLoginModal}>
                    <HomeLoginModalScreen />
                </Modal>
            )}
        </div>
    );
};

export default React.memo(HomePage);
