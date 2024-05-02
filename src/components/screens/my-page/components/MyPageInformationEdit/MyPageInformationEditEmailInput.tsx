import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';
import { useFormContext, useWatch } from 'react-hook-form';
import type { MyPageInformationEditForm } from './MyPageInformationEditModalScreen';

interface MyPageInformationEditEmailInputProps {
    onClick: VoidFunction;
}

const MyPageInformationEditEmailInput: FC<MyPageInformationEditEmailInputProps> = ({ onClick }) => {
    const { register, control } = useFormContext<MyPageInformationEditForm>();
    const email = useWatch({ control, name: 'email' });
    return (
        <section className="flex w-full gap-1">
            <p className="w-full">
                <CommonInput
                    placeholder="아이디(이메일)"
                    variant="primary"
                    {...register('email')}
                />
            </p>
            <p className="w-40">
                <Button variant="blue" disabled={!email} onClick={onClick}>
                    인증요청
                </Button>
            </p>
        </section>
    );
};

export default MyPageInformationEditEmailInput;
