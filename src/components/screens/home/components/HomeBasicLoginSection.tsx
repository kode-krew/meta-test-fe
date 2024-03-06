import { FC } from 'react';
import Button from '@src/components/common/Button';
import CommonInput from '@src/components/common/CommonInput';

interface HomeBasicLoginSectionProps {}

const HomeBasicLoginSection: FC<HomeBasicLoginSectionProps> = () => (
    <form className="container mt-4">
        <div>
            <label htmlFor="email" className="font-semibold">
                Email
            </label>
            <CommonInput type="email" id="email" placeholder="이메일을 입력해주세요." />
        </div>
        <div className="mt-3">
            <label htmlFor="password" className="font-semibold">
                Password
            </label>
            <CommonInput id="password" type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <div className="mt-6 flex flex-col gap-3">
            <Button variant="primary-unselect">이메일 회원가입</Button>
            <Button variant="primary">이메일 회원가입</Button>
            <span className="flex w-full justify-end text-sm font-medium text-gray-500">
                비밀번호를 잊으셨나요?
            </span>
        </div>
    </form>
);

export default HomeBasicLoginSection;
