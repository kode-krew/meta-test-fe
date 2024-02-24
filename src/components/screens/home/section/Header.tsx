import { FC } from 'react';
import Button from '@src/components/common/Button';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
    <header className="m-5 flex flex-row-reverse">
        <Button variant="secondary">로그인 / 회원가입</Button>
    </header>
);

export default Header;
