import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface HomeSignupScreenProps {}

const HomeSignupScreen: FC<HomeSignupScreenProps> = () => (
    <section className="container w-96 rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7">
        <p className="text-2xl font-bold">회원가입</p>
        <section className="mt-5 flex flex-col gap-6">
            <section className="flex w-full gap-1">
                <p className="w-full">
                    <CommonInput placeholder="아이디(이메일)" variant="primary" />
                </p>
                <p className="container w-40">
                    <Button variant="blue">인증요청</Button>
                </p>
            </section>
            <CommonInput placeholder="비밀번호" variant="primary" />
            <CommonInput placeholder="비밀번호 확인" variant="primary" />
        </section>
        <section className="mt-5">
            <Button variant="primary">완료</Button>
        </section>
    </section>
);

export default HomeSignupScreen;
