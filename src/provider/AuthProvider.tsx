// AuthProvider.tsx (클라이언트 컴포넌트)
'use client';

import { FC, useEffect, useState } from 'react';
import { AuthService } from '@src/service/AuthService';
import { cookies } from 'next/headers';
import { setAuthCookie } from '@src/app/actions/setAuthCookie';
import defaultRequest from '@src/lib/axios/defaultRequest';

interface IAuthProviderProps {
    accessToken?: string;
    refreshToken?: string;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ accessToken, refreshToken }) => {
    useEffect(() => {
        if (accessToken && refreshToken) {
            setAuthCookie({ rtk: refreshToken, atk: accessToken });
        }
    }, [accessToken, refreshToken]);

    useEffect(() => {
        defaultRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }, [accessToken]);

    return <></>;
};
