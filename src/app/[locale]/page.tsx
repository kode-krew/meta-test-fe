'use client';

import { useState } from 'react';
import Modal from '@src/components/common/Modal';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeQuizSelectScreen from '@src/components/screens/home/components/HomeQuizSelectScreen';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="w-screen">
            <HomeHeader onClickLoginButton={() => {}} />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton onClick={handleModal} />
            {isOpen && (
                <Modal onClose={handleModal}>
                    <HomeQuizSelectScreen onClickButton={handleModal} />
                </Modal>
            )}
        </div>
    );
};

export default Index;
