import AuthPageClient from './components/AuthPageClient';

type SocialLoginType = 'google' | 'kakao';

interface SocialLoginInfo {
    loginPath: string;
    socialType: SocialLoginType;
}

export interface SocialLoginRequestParameter {
    loginPath: string;
    code: string;
    socialType: SocialLoginType;
}

interface AuthPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
    const code = searchParams.code;

    return <AuthPageClient code={code} />;
};

export default AuthPage;
