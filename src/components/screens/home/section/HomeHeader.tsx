import { FC, MouseEventHandler } from 'react';
import Button from '@src/components/common/Button';

interface HomeHeaderProps {
    onClickLoginButton: MouseEventHandler<HTMLButtonElement>;
}

const HomeHeader: FC<HomeHeaderProps> = ({ onClickLoginButton }) => (
    <header className="m-5 flex flex-row-reverse">
        <div>
            <Button onClick={onClickLoginButton} variant="secondary">
                로그인 / 회원가입
            </Button>
        </div>
    </header>
);

export default HomeHeader;
