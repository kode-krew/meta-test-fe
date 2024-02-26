import { FC } from 'react';

interface HomePageTitleBoxProps {}

const HomePageTitleBox: FC<HomePageTitleBoxProps> = () => (
    <div className="flex w-screen justify-center ">
        <div className="border-ra 65 40 h-50 w-1/3 rounded border-none bg-zinc-800 p-5">
            <p className="text-center text-xl font-bold text-white antialiased sm:text-2xl md:text-3xl">
                메타인지 테스트
            </p>
            <p className="sm:text-xxs text-xxxs m-1 text-center text-white antialiased md:text-xs">
                당신의 메타인지 능력은 몇 점?
            </p>
        </div>
    </div>
);

export default HomePageTitleBox;
