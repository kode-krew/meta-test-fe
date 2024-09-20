import { AuthProvider } from '@src/provider/AuthProvider';
import axios, { isAxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const reissueToken = async () => {
    try {
        await axios.put(`${process.env.NEXT_PUBLIC_MATE_TEST_WEB_HOST_URL}/api/auth`);
    } catch (error) {
        redirect('/');
    }
};

const checkToken = async (accessToken?: string) => {
    try {
        await axios(`${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/users`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error.response?.status === 401) {
            reissueToken();
        } else {
            redirect('/');
        }
    }
};

const VerifyPageLayout = ({ children }: PropsWithChildren) => {
    const accessToken = cookies().get('atk')?.value;
    checkToken(accessToken); // 비동기 처리를 기다린 후에 처리

    return (
        <>
            <AuthProvider accessToken={accessToken} />
            {children}
        </>
    );
};

export default VerifyPageLayout;
