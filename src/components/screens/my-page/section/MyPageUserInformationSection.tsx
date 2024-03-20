import { FC } from 'react';
import RoundedButton from '@src/components/common/RoundedButton';

interface MyPageUserInformationSectionProps {}

const MyPageUserInformationSection: FC<MyPageUserInformationSectionProps> = () => (
    <section className="flex flex-col gap-5">
        <header className="flex  w-full justify-between">
            <section className="flex w-fit w-full items-center">
                <h1 className="text-xl font-bold">내 정보</h1>
            </section>
            <section className="flex gap-2">
                <div className="w-max">
                    <RoundedButton variant="secondary">비밀번호변경</RoundedButton>
                </div>
                <div className="w-max">
                    <RoundedButton variant="primary">수정</RoundedButton>
                </div>
            </section>
        </header>
        <main className="flex flex-col gap-4 px-3 py-5 shadow-md">
            <section className="flex">
                <span className="w-44">이메일</span>
                <span>test@test.com</span>
            </section>
            <section className="flex">
                <span className="w-44">닉네임</span>
                <span>test@test.com</span>
            </section>
        </main>
    </section>
);

export default MyPageUserInformationSection;
