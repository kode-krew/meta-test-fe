import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext } from 'react-hook-form';
import type { HomeBasicLoginFormValue } from './HomeBasicLoginSection';

interface HomeBasicLoginEmailInputProps {}

const HomeBasicLoginEmailInput: FC<HomeBasicLoginEmailInputProps> = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<HomeBasicLoginFormValue>();
    return (
        <div>
            <label htmlFor="email" className="font-semibold">
                Email
            </label>
            <CommonInput
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요."
                variant="primary"
                {...register('email', { required: '이메일은 필수값입니다.' })}
            />
            <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <span className="text-red-600">{message}</span>}
            />
        </div>
    );
};
export default HomeBasicLoginEmailInput;
