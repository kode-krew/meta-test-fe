import { setAuthCookie } from '@src/app/actions/setAuthCookie';
import { SocialLoginRequestParameter } from '@src/app/auth/page';
import axios, { isAxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const metaTestServerHost = process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL;

export async function POST(request: NextRequest) {
    const { code, socialType }: Omit<SocialLoginRequestParameter, 'loginPath'> =
        await request.json();

    if (!code || !socialType) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
    }

    try {
        const serverResponse = await axios.get(`${metaTestServerHost}/auth/login/${socialType}`, {
            params: {
                code,
            },
        });

        const accessToken = serverResponse.headers.access_token;
        const refreshToken = serverResponse.headers.refresh_token;

        // NextResponse에 쿠키 설정
        const response = NextResponse.json({ success: true });

        setAuthCookie({ atk: accessToken, rtk: refreshToken });
        // 새로운 Access Token을 응답 헤더로 클라이언트에 전달
        response.headers.set('Authorization', `Bearer ${accessToken}`);
        return response;
    } catch (error) {
        if (isAxiosError(error) && error.response?.data) {
            return NextResponse.json(
                { error: error.response.data.message },
                {
                    status: error.response?.status || 500,
                },
            );
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
