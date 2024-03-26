import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface MyPageInformationEditModalScreenProps {}

const MyPageInformationEditModalScreen: FC<MyPageInformationEditModalScreenProps> = () => (
    <section className="container max-w-96 rounded-md border border-violet-400 bg-white px-5 pb-5 pt-7">
        <p className="text-2xl font-bold">정보수정</p>
        <section className="mt-5 flex flex-col gap-6">
            <section className="flex w-full flex-col gap-3">
                <section>
                    <p className="text-base font-bold text-gray-400">아이디(이메일)</p>
                </section>
                <section className="flex w-full gap-1">
                    <p className="w-full">
                        <CommonInput placeholder="아이디(이메일)" variant="primary" />
                    </p>
                    <p className="container w-40">
                        <Button variant="blue">인증요청</Button>
                    </p>
                </section>
            </section>
            <section className="flex w-full flex-col gap-3">
                <section>
                    <p className="text-base font-bold text-gray-400">닉네임</p>
                </section>
                <CommonInput placeholder="닉네임" variant="primary" />
            </section>
        </section>
        <section className="mt-5">
            <Button variant="primary">완료</Button>
        </section>
    </section>
);

export default MyPageInformationEditModalScreen;
