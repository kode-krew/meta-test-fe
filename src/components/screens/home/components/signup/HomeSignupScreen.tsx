import { FC } from 'react';
import { postSignup } from '@src/api/postSingup';
import { useMutation } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import HomeSignupButton from './HomeSignupButton';
import HomeSignupPassword from './HomeSignupPassword';
import HomeSignupPasswordConfirm from './HomeSignupPasswordConfirm';
import HomeSingupEmail from './HomeSingupEmail';

interface HomeSignupScreenProps {}

export interface HomeSignupFormValue {
    email: string;
    password: string;
    passwordConfirm: string;
}

const HomeSignupScreen: FC<HomeSignupScreenProps> = () => {
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

    const onSubmit = async ({ email, password }: HomeSignupFormValue) => {
        submitSignupForm.mutate(
            { email, password },
            {
                onSuccess: () => {
                    console.log('성공!');
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
