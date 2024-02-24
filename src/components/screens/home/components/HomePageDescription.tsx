import { FC } from 'react';
import Link from 'next/link';

interface HomePageDescriptionProps {}

const HomePageDescription: FC<HomePageDescriptionProps> = () => (
    <div className="flex w-full flex-col items-center gap-5 bg-green-100 p-1">
        <p>테스트는 어떻게 설계되었나요?</p>
        <div>
            <div className="flex gap-1">
                이 테스트는
                <p>
                    <Link
                        className="italic"
                        href="https://www.youtube.com"
                        target="_blank"
                    >{`EBS 학교란 무엇인가 8부 '0.1% 의 비밀'`}</Link>
                    에서
                </p>
            </div>
            <p className="flex justify-center">
                수행한 실험 내용과 동일한 방식으로 설계되었습니다.
            </p>
        </div>
    </div>
);

export default HomePageDescription;
