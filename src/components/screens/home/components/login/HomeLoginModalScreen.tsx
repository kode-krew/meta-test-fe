import React, { FC } from 'react';
import GoogleIcon from '@src/components/common/Icons/GoogleIcon';
import KakaoIcon from '@src/components/common/Icons/KakaoIcon';
import { setCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import HomeBasicLoginSection from './HomeBasicLoginSection';

interface HomeLoginModalScreenProps {
    onSuccessLogin: VoidFunction;
}

type SocialType = 'google' | 'kakao';

const HomeLoginModalScreen: FC<HomeLoginModalScreenProps> = ({ onSuccessLogin }) => {
    const pathName = usePathname();
    const onClickSnsLogin = (socialType: SocialType) => {
        setCookie('social-login-info', {
            loginPath: pathName,
            socialType,
        });
    };

    return (
        <div
            className="
           w-96
            rounded-md border border-violet-400 bg-violet-200 px-5 pb-5 pt-7"
        >
            <p className="text-2xl font-bold">로그인</p>
            <section className="mt-3 flex flex-col gap-3">
                <a href={`${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/auth/login/google`}>
                    <button
                        type="button"
                        onClick={() => {
                            onClickSnsLogin('google');
                        }}
                        className="flex h-10 w-full  items-center gap-2 rounded-md bg-slate-200 p-3"
                    >
                        <GoogleIcon />
                        <p className="flex w-full justify-center text-sm">Continues With Google</p>
                    </button>
                </a>
                <a href={`${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/auth/login/kakao`}>
                    <button
                        type="button"
                        onClick={() => {
                            onClickSnsLogin('kakao');
                        }}
                        className="flex h-10 w-full  items-center gap-2 rounded-md bg-yellow-300 p-3"
                    >
                        <KakaoIcon />
                        <p className="flex w-full justify-center text-sm">카카오 로그인</p>
                    </button>
                </a>
            </section>
            <hr className="mt-4 h-px border-none bg-violet-400" />
            <HomeBasicLoginSection onSuccessLogin={onSuccessLogin} />
        </div>
    );
};

export default React.memo(HomeLoginModalScreen);
