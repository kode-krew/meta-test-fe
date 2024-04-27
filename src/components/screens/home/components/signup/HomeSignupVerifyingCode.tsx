import { FC, MouseEventHandler } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext, useWatch } from 'react-hook-form';
import type { HomeSignupFormValue } from './HomeSignupScreen';

interface HomeSignupVerifyingCodeProps {
    onClickVerifyingButton: MouseEventHandler<HTMLButtonElement>;
}

const HomeSignupVerifyingCode: FC<HomeSignupVerifyingCodeProps> = ({ onClickVerifyingButton }) => {
    const {
        register,
        formState: { errors },
        control,
    } = useFormContext<HomeSignupFormValue>();
    const code = useWatch({
        control,
        name: 'code',
    });

    return (
        <section className="flex w-full  gap-3">
            <div className="flex w-4/5 flex-col gap-3">
                <CommonInput
                    variant="primary"
                    placeholder="인증 코드 입력"
                    inputMode="numeric"
                    maxLength={4}
                    {...register('code', {
                        required: true,
                        validate: {
                            isValidCode: (value) =>
                                /^\d{4}$/.test(String(value)) ||
                                '인증 코드는 4자리 숫자여야 합니다.',
                        },
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="code"
                    render={({ message }) => <span className="text-red-600">{message}</span>}
                />
            </div>
            <div className="w-1/5">
                <Button
                    type="button"
                    variant="blue"
                    onClick={onClickVerifyingButton}
                    disabled={!code}
                >
                    인증
                </Button>
            </div>
        </section>
    );
};

export default HomeSignupVerifyingCode;
