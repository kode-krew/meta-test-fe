import useSocialLogin, { SocialType } from '@src/hooks/useSocialLogin';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type SocialLoginType = 'google' | 'kakao';

interface SocialLoginInfo {
    loginPath: string;
    socialType: SocialLoginType;
}

interface SocialLoginRequestParameter {
    loginPath: string;
    code: string;
    socialType: SocialLoginType;
}

const processSocialLogin = async ({ code, socialType, loginPath }: SocialLoginRequestParameter) => {
    try {
        const data = await axios.post(`${process.env.NEXT_PUBLIC_MATE_TEST_WEB_HOST_URL}/api/social-login`, {
            code,
            socialType,
        });
        console.log('sss', data);
    } catch (error) {
        console.log(error, '에러다!');
    }
};

const AuthPage = ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string };
}) => {
    const code = searchParams.code;
    const socialLoginInfo = cookies().get('social-login-info')?.value;
    if (!socialLoginInfo) {
        return redirect('/');
    }
    const { loginPath, socialType } = JSON.parse(socialLoginInfo) as SocialLoginInfo;
    console.log(searchParams.code, socialLoginInfo, 'ㄴㄴㄴ');

    switch (socialType) {
        case 'google':
            processSocialLogin({ code, socialType, loginPath });
            break;

        case 'kakao':
    }
    return <></>;
};

export default AuthPage;
