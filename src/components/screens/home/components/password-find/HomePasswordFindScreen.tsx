import { FC } from 'react';
import { patchPasswordFind } from '@src/api/patchPasswordFind';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import { ModalService } from '@src/components/common/modal/ModalService';
import { ToastService } from '@src/components/common/toast/ToastService';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import HomePasswordFindEmailInput from './HomePasswordFindEmailInput';
import HomePasswordFindPostButton from './HomePasswordFindPostButton';

interface HomePasswordFindScreenProps {}

export interface HomePasswordFindFormValue {
    email: string;
}

const HomePasswordFindScreen: FC<HomePasswordFindScreenProps> = () => {
    const toastService = ToastService.getInstance();
    const modalService = ModalService.getInstance();
    const passwordFind = useMutation({
        mutationFn: patchPasswordFind,
    });
    const form = useForm<HomePasswordFindFormValue>({
        defaultValues: {
            email: '',
        },
    });

    const onValid = async ({ email }: HomePasswordFindFormValue) => {
        await passwordFind.mutate(
            { email },
            {
                onSuccess: async () => {
                    await toastService.addToast('메일로 비밀번호가 발송되었습니다.');
                    modalService.closeEntireModal();
                },
                onError: (error) => {
                    if (isAxiosError(error)) {
                        const errorMessage = Array.isArray(error.response?.data.message)
                            ? error.response?.data.message[0]
                            : error.response?.data.message;
                        toastService.addToast(errorMessage);
                        return;
                    }
                    toastService.addToast(error.message);
                },
            },
        );
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onValid)}
                className="container w-96 rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7"
            >
                <p className="text-2xl font-bold">비밀번호 초기화</p>
                <HomePasswordFindEmailInput />
                <HomePasswordFindPostButton />
            </form>
        </FormProvider>
    );
};

export default HomePasswordFindScreen;
