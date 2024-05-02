import { FC, useState } from 'react';
import { API_GET_USER_PROFILE, getUserProfile } from '@src/api/getUserProfile';
import { patchUsers } from '@src/api/patchUsers';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import EmailVerifyingCode from '@src/components/common/EmailVerifyingCode';
import { ModalService } from '@src/service/ModalService';
import { ToastService } from '@src/service/ToastService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import MyPageInformationEditEmailInput from './MyPageInformationEditEmailInput';

interface MyPageInformationEditModalScreenProps {}

export interface MyPageInformationEditForm {
    email: string;
    nickName: string;
    code: string;
}

const MyPageInformationEditModalScreen: FC<MyPageInformationEditModalScreenProps> = () => {
    const [authForm, setAuthForm] = useState({
        isOpen: false,
        isSuccessAuthorization: false,
    });
    const userInformationQuery = useQuery({
        queryKey: [API_GET_USER_PROFILE],
        queryFn: getUserProfile,
    });

    const { replace } = useRouter();
    const toastService = ToastService.getInstance();
    const modalService = ModalService.getInstance();
    const { mutate: updateUserInformation } = useMutation({
        mutationFn: patchUsers,
    });

    const form = useForm<MyPageInformationEditForm>({
        defaultValues: {
            email: '',
            nickName: '',
            code: '',
        },
    });

    return (
        <FormProvider {...form}>
            <form className="container max-w-96 rounded-md border border-violet-400 bg-white px-5 pb-5 pt-7">
                <p className="text-2xl font-bold">정보수정</p>
                <section className="mt-5 flex flex-col gap-6">
                    {userInformationQuery.data?.userType === 'NORMAL' && (
                        <section className="flex w-full flex-col gap-3">
                            <section>
                                <p className="text-base font-bold text-gray-400">아이디(이메일)</p>
                            </section>
                            {/* <section className="flex w-full gap-1">
                                <p className="w-full">
                                    <CommonInput
                                        placeholder="아이디(이메일)"
                                        variant="primary"
                                        {...register('email')}
                                    />
                                </p>
                                <p className="w-40">
                                    <Button variant="blue">인증요청</Button>
                                </p>
                            </section> */}
                            <MyPageInformationEditEmailInput
                                onClick={() => {
                                    setAuthForm((prev) => ({ ...prev, isOpen: true }));
                                }}
                            />
                            {authForm.isOpen && (
                                <div className="animate-slideup">
                                    <EmailVerifyingCode onClickVerifyingButton={() => {}} />
                                </div>
                            )}
                        </section>
                    )}
                    <section className="flex w-full flex-col gap-3">
                        <section>
                            <p className="text-base font-bold text-gray-400">닉네임</p>
                        </section>
                        <CommonInput
                            placeholder="닉네임"
                            {...form.register('nickName')}
                            variant="primary"
                        />
                    </section>
                </section>
                <section className="mt-5">
                    <Button variant="primary">완료</Button>
                </section>
            </form>
        </FormProvider>
    );
};

export default MyPageInformationEditModalScreen;
