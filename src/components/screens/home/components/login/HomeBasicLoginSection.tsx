import { FC, useState } from 'react';
import { postLogin } from '@src/api/postLogin';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import Modal from '@src/components/common/modal/Modal';
import { ModalService } from '@src/components/common/modal/ModalService';
import { ToastService } from '@src/components/common/toast/ToastService';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { FormProvider, useForm } from 'react-hook-form';
import HomeBasicLoginEmailInput from './HomeBasicLoginEmailInput';
import HomeBasicLoginPasswordInput from './HomeBasicLoginPasswordInput';
import HomeBasicLoginSubmitButton from './HomeBasicLoginSubmitButton';
import HomePasswordFindScreen from '../HomePasswordFindScreen';
import HomeSignupScreen from '../signup/HomeSignupScreen';

interface HomeBasicLoginSectionProps {
    onSuccessLogin: VoidFunction;
}

export interface HomeBasicLoginFormValue {
    email: string;
    password: string;
}

const HomeBasicLoginSection: FC<HomeBasicLoginSectionProps> = ({ onSuccessLogin }) => {
    const modalService = ModalService.getInstance();
    const toastService = ToastService.getInstance();
    const login = useMutation({
        mutationFn: postLogin,
        onSuccess: async (data) => {
            if (data) {
                const accessToken = data.headers.access_token;
                const refreshToken = data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                await onSuccessLogin();
                modalService.closeEntireModal();
            }
        },
        onError: (data) => {
            if (isAxiosError(data)) {
                toastService.addToast(data.response?.data.message);
                return;
            }
            toastService.addToast(data.message);
        },
    });
    const methods = useForm<HomeBasicLoginFormValue>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

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

    const onSubmit = ({ email, password }: HomeBasicLoginFormValue) => {
        login.mutate({
            email,
            password,
        });
    };

    return (
        <FormProvider {...methods}>
            <form className="container mt-4" onSubmit={methods.handleSubmit(onSubmit)}>
                <HomeBasicLoginEmailInput />
                <HomeBasicLoginPasswordInput />
                <div className="mt-6 flex flex-col gap-3">
                    <Button variant="primary-unselect" onClick={onClickSignup} type="button">
                        이메일 회원가입
                    </Button>
                    <HomeBasicLoginSubmitButton />
                    <span
                        className="flex w-full cursor-pointer justify-end text-sm font-medium text-gray-500"
                        onClick={onClickPasswordFind}
                    >
                        비밀번호를 잊으셨나요?
                    </span>
                </div>
            </form>
        </FormProvider>
    );
};

export default HomeBasicLoginSection;
