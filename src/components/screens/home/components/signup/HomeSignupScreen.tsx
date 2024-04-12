import { FC } from 'react';
import { postLogin } from '@src/api/postLogin';
import { postSignup } from '@src/api/postSingup';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { ModalService } from '@src/service/ModalService';
import { ToastService } from '@src/service/ToastService';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, isAxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { FormProvider, useForm } from 'react-hook-form';
import HomeSignupButton from './HomeSignupButton';
import HomeSignupPassword from './HomeSignupPassword';
import HomeSignupPasswordConfirm from './HomeSignupPasswordConfirm';
import HomeSingupEmail from './HomeSingupEmail';

interface HomeSignupScreenProps {
    onSuccessLogin: VoidFunction;
}

export interface HomeSignupFormValue {
    email: string;
    password: string;
    passwordConfirm: string;
}

const HomeSignupScreen: FC<HomeSignupScreenProps> = ({ onSuccessLogin }) => {
    const toastService = ToastService.getInstance();
    const modalService = ModalService.getInstance();

    const methods = useForm<HomeSignupFormValue>({
        defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
    });

    const submitSignupForm = useMutation({
        mutationFn: postSignup,
    });

    const login = useMutation({
        mutationFn: postLogin,
        onSuccess: async (data) => {
            if (data) {
                const accessToken = data.headers.access_token;
                const refreshToken = data.headers.refresh_token;
                defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                await setCookie('refreshToken', refreshToken);
                onSuccessLogin();
            }
        },
    });

    const onSubmit = async ({ email, password }: HomeSignupFormValue) => {
        submitSignupForm.mutate(
            { email, password },
            {
                onSuccess: async () => {
                    await toastService.addToast('가입이 완료되었습니다.');
                    await modalService.closeEntireModal();
                    login.mutate({
                        email,
                        password,
                    });
                },
                onError: (data) => {
                    if (isAxiosError(data)) {
                        toastService.addToast(data.response?.data.message);
                        return;
                    }
                    toastService.addToast(data.message);
                },
            },
        );
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="container w-96 rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7"
            >
                <p className="text-2xl font-bold">회원가입</p>
                <section className="mt-5 flex flex-col gap-6">
                    <HomeSingupEmail />
                    <HomeSignupPassword />
                    <HomeSignupPasswordConfirm />
                </section>
                <HomeSignupButton isSubmittedEmail />
            </form>
        </FormProvider>
    );
};

export default HomeSignupScreen;
