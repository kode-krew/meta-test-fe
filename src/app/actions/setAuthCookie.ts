'use server';

import { cookies } from 'next/headers';

export const setAuthCookie = async (token: { atk: string; rtk: string }) => {
    await cookies().set('rtk', token.rtk, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 14, // 2주
        path: '/',
        sameSite: 'strict',
    });
    // Refresh Token을 HttpOnly 쿠키로 설정 (기간 2주)
    await cookies().set('atk', token.atk, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 30, // 30분
        path: '/',
        sameSite: 'strict',
    });
};
