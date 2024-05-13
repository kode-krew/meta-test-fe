'use client';

import { FC } from 'react';
import RoundSquareButton from '@src/components/common/RoundSquareButton';
import { ModalService } from '@src/service/ModalService';
import HomeQuizSelectScreen from './HomeQuizSelectScreen';

interface HomeFooterButtonProps {}

const HomeFooterButton: FC<HomeFooterButtonProps> = () => {
    const modalService = ModalService.getInstance();
    const handleQuizModal = () => {
        // TODO 추후 토스트 사용 시 추가.
        modalService.openModal(
            <HomeQuizSelectScreen
                testId="quiz-modal"
                onClickButton={() => {
                    modalService.closeModal();
                }}
            />,
        );
    };

    return (
        <div
            className="
fixed
bottom-0
flex
h-44
w-screen
justify-center
"
        >
            <div className="w-full max-w-lg p-20">
                <RoundSquareButton variant="primary" onClick={handleQuizModal}>
                    <p className="font-bold antialiased">테스트 시작</p>
                </RoundSquareButton>
            </div>
        </div>
    );
};

export default HomeFooterButton;
