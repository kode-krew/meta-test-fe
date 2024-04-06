import { FC, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext, useWatch } from 'react-hook-form';
import type { HomeSignupFormValue } from './HomeSignupScreen';

interface HomeSingupEmailProps {}

const HomeSingupEmail: FC<HomeSingupEmailProps> = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<HomeSignupFormValue>();
    const emailValue = useWatch({ control, name: 'email' });

    return (
        <section className="flex w-full gap-1">
            <p className="w-full">
                <CommonInput
                    placeholder="아이디(이메일)"
                    variant="primary"
                    {...register('email', { required: '이메일을 필수값 입니다!' })}
                />
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <span className="text-red-600">{message}</span>}
                />
            </p>

            <p className="container w-40">
                <Button
                    variant="blue"
                    type="submit"
                    onClick={() => {
                        // TODO 추후 api 작업 시 예정.
                        console.log(emailValue);
                    }}
                >
                    인증요청
                </Button>
            </p>
        </section>
    );
};

export default HomeSingupEmail;
