import { FC, useState } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import Modal from '@src/components/common/modal/Modal';
import { ModalService } from '@src/components/common/modal/ModalService';
import HomePasswordFindScreen from './HomePasswordFindScreen';
import HomeSignupScreen from './signup/HomeSignupScreen';

interface HomeBasicLoginSectionProps {
    onSuccessLogin: VoidFunction;
}

const HomeBasicLoginSection: FC<HomeBasicLoginSectionProps> = ({ onSuccessLogin }) => {
    const modalService = ModalService.getInstance();

    const onCloseModal = () => {
        modalService.closeModal();
    };
    const onClickPasswordFind = () => {
        modalService.openModal(
            <Modal onClose={onCloseModal}>
                <HomePasswordFindScreen />
            </Modal>,
        );
    };

    const onClickSignup = () => {
        modalService.openModal(
            <Modal onClose={onCloseModal}>
                <HomeSignupScreen onSuccessLogin={onSuccessLogin} />
            </Modal>,
        );
    };

    return (
        <form className="container mt-4">
            <div>
                <label htmlFor="email" className="font-semibold">
                    Email
                </label>
                <CommonInput
                    type="email"
                    id="email"
                    placeholder="이메일을 입력해주세요."
                    variant="primary"
                />
            </div>
            <div className="mt-3">
                <label htmlFor="password" className="font-semibold">
                    Password
                </label>
                <CommonInput
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    variant="primary"
                />
            </div>
            <div className="mt-6 flex flex-col gap-3">
                <Button variant="primary-unselect" onClick={onClickSignup}>
                    이메일 회원가입
                </Button>
                <Button variant="primary">로그인</Button>
                <span
                    className="flex w-full cursor-pointer justify-end text-sm font-medium text-gray-500"
                    onClick={onClickPasswordFind}
                >
                    비밀번호를 잊으셨나요?
                </span>
            </div>
        </form>
    );
};

export default HomeBasicLoginSection;
