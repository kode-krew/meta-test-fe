import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface HomeSignupScreenProps {}

const HomeSignupScreen: FC<HomeSignupScreenProps> = () => (
    <div className="container w-96 rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7">
        <p className="text-2xl font-bold">회원가입</p>
        <div className="mt-5 flex flex-col gap-3">
            <CommonInput placeholder="아이디(이메일)" />
            <CommonInput placeholder="비밀번호" />
            <CommonInput placeholder="비밀번호 확인" />
        </div>
        <div className="mt-5">
            <Button variant="primary">완료</Button>
        </div>
    </div>
);

export default HomeSignupScreen;
