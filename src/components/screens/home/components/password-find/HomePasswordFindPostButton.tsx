import { FC } from 'react';
import Button from '@src/components/common/Button';
import { useFormContext, useWatch } from 'react-hook-form';
import type { HomePasswordFindFormValue } from './HomePasswordFindScreen';

interface HomePasswordFindPostButtonProps {}

const HomePasswordFindPostButton: FC<HomePasswordFindPostButtonProps> = () => {
    const { control } = useFormContext<HomePasswordFindFormValue>();
    const email = useWatch({ control, name: 'email' });

    return (
        <div className="mt-5">
            <Button variant="primary" disabled={!email} type="submit">
                이메일 발송
            </Button>
        </div>
    );
};

export default HomePasswordFindPostButton;
