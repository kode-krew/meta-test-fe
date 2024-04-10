import { FC } from 'react';
import Button from '@src/components/common/Button';

interface HomeBasicLoginSubmitButtonProps {}

const HomeBasicLoginSubmitButton: FC<HomeBasicLoginSubmitButtonProps> = () => (
    <Button variant="primary" type="submit">
        로그인
    </Button>
);

export default HomeBasicLoginSubmitButton;
