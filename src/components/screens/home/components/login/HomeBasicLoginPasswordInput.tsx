import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext } from 'react-hook-form';
import type { HomeBasicLoginFormValue } from './HomeBasicLoginSection';

interface HomeBasicLoginPasswordInputProps {}

const HomeBasicLoginPasswordInput: FC<HomeBasicLoginPasswordInputProps> = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<HomeBasicLoginFormValue>();

    return (
        <div className="mt-3">
            <label htmlFor="password" className="font-semibold">
                Password
            </label>
            <CommonInput
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                variant="primary"
                {...register('password', { required: '비밀번호는 필수값입니다.' })}
            />
            <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <span className="text-red-600">{message}</span>}
            />
        </div>
    );
};

export default HomeBasicLoginPasswordInput;
