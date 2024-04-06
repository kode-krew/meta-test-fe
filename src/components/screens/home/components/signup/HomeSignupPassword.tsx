import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext } from 'react-hook-form';
import type { HomeSignupFormValue } from './HomeSignupScreen';

interface HomeSignupPasswordProps {}

const HomeSignupPassword: FC<HomeSignupPasswordProps> = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<HomeSignupFormValue>();

    return (
        <section className="flex flex-col">
            <CommonInput
                placeholder="비밀번호"
                variant="primary"
                type="password"
                {...register('password', { required: '비밀번호는 필수값입니다.' })}
            />
            <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <span className="text-red-600">{message}</span>}
            />
        </section>
    );
};

export default HomeSignupPassword;
