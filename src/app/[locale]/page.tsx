'use client';

import { useState } from 'react';
import Modal from '@src/components/common/Modal';
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

const Index = () => {
    const [modalProps, setModalProps] = useState<ModalProps>({
        isOpenLoginModal: false,
        isOpenQuizModal: false,
    });

    const handleQuizModal = () => {
        setModalProps((prev) => ({ ...prev, isOpenQuizModal: !prev.isOpenQuizModal }));
    };
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
                    {/* <HomeQuizSelectScreen onClickButton={handleQuizModal} /> */}
                </Modal>
            )}
        </div>
    );
};

export default Index;
