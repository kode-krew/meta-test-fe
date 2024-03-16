import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface HomePasswordFindScreenProps {}

const HomePasswordFindScreen: FC<HomePasswordFindScreenProps> = () => (
    <div className="container w-96 rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7">
        <p className="text-2xl font-bold">비밀번호 초기화</p>
        <div className="mt-5">
            <CommonInput placeholder="아이디(이메일)" variant="primary" />
        </div>
        <div className="mt-5">
            <Button variant="primary">이메일 발송</Button>
        </div>
    </div>
);

export default HomePasswordFindScreen;
