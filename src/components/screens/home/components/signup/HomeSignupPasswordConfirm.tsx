import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext } from 'react-hook-form';
import type { HomeSignupFormValue } from './HomeSignupScreen';

interface HomeSignupPasswordConfirmProps {}

const HomeSignupPasswordConfirm: FC<HomeSignupPasswordConfirmProps> = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<HomeSignupFormValue>();

    return (
        <section className="flex flex-col">
            <CommonInput
                placeholder="비밀번호 확인"
                variant="primary"
                type="password"
                {...register('passwordConfirm', { required: '비밀번호를 다시 적어주세요.' })}
            />
            <ErrorMessage
                errors={errors}
                name="passwordConfirm"
                render={({ message }) => <span className="text-red-600">{message}</span>}
            />
        </section>
    );
};

export default HomeSignupPasswordConfirm;
