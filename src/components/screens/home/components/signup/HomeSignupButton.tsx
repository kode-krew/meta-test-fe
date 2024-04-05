import { FC } from 'react';
import Button from '@src/components/common/Button';
import { useFormContext, useWatch } from 'react-hook-form';
import type { HomeSignupFormValue } from './HomeSignupScreen';

interface HomeSignupButtonProps {
    isSubmittedEmail: boolean;
}

const HomeSignupButton: FC<HomeSignupButtonProps> = ({ isSubmittedEmail }) => {
    const { control } = useFormContext<HomeSignupFormValue>();
    const email = useWatch({ control, name: 'email' });
    const password = useWatch({ control, name: 'password' });
    const passwordConfirm = useWatch({ control, name: 'passwordConfirm' });

    const isDisabledButton = !email || !password || !passwordConfirm || !isSubmittedEmail;

    return (
        <section className="mt-5">
            <Button disabled={isDisabledButton} variant="primary" type="submit">
                완료
            </Button>
        </section>
    );
};
export default HomeSignupButton;
