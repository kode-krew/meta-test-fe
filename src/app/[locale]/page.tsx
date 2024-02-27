'use client';

import { useState } from 'react';
import Button from '@src/components/common/Button';
import Modal from '@src/components/common/Modal';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';
import { AppProps } from 'next/app';
import { useTranslations } from 'next-intl';

const Index = ({ Component }: AppProps) => {
    // console.log(Component);
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="w-screen">
            <HomeHeader onClickLoginButton={handleModal} />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton />
            {isOpen && (
                <Modal onClose={handleModal}>
                    <div>모달처리! </div>
                </Modal>
            )}
        </div>
    );
};

export default Index;
