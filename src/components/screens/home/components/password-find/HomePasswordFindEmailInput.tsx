import { FC } from 'react';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext } from 'react-hook-form';
import type { HomePasswordFindFormValue } from './HomePasswordFindScreen';

interface HomePasswordFindEmailInputProps {}

const HomePasswordFindEmailInput: FC<HomePasswordFindEmailInputProps> = () => {
    const { register } = useFormContext<HomePasswordFindFormValue>();

    return (
        <div className="mt-5">
            <CommonInput placeholder="아이디(이메일)" variant="primary" {...register('email')} />
        </div>
    );
};

export default HomePasswordFindEmailInput;
