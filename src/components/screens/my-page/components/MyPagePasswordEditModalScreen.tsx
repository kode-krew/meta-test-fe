import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface MyPagePasswordEditModalScreenProps {}

const MyPagePasswordEditModalScreen: FC<MyPagePasswordEditModalScreenProps> = () => (
    <section className="container max-w-96 rounded-md border border-violet-400 bg-white px-5 pb-5 pt-7">
        <p className="text-2xl font-bold">비밀번호 변경</p>
        <section className="mt-5 flex w-full flex-col gap-6">
            <section className="flex w-full flex-col gap-3">
                <section className="flex w-full gap-3">
                    <p className="text-base font-bold text-gray-400">아이디</p>
                    <span>spjh@abc.com</span>
                </section>
                <section className="flex gap-3">
                    <p className="text-base font-bold text-gray-400">닉네임</p>
                    <span>테스트</span>
                </section>
            </section>
            <section className="flex w-full flex-col gap-3">
                <section>
                    <p className="text-base font-bold text-gray-400">비밀번호</p>
                </section>
                <CommonInput placeholder="변경하실 비밀번호를 입력해주세요." variant="primary" />
            </section>
            <section className="flex w-full flex-col gap-3">
                <section>
                    <p className="text-base font-bold text-gray-400">비밀번호 확인</p>
                </section>
                <CommonInput placeholder="변경하실 비밀번호를 입력해주세요." variant="primary" />
            </section>
        </section>

        <section className="mt-5">
            <Button variant="primary">완료</Button>
        </section>
    </section>
);

export default MyPagePasswordEditModalScreen;
