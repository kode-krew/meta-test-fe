'use client';

import { setAuthCookie } from '@src/app/actions/setAuthCookie';
import defaultRequest from '@src/lib/axios/defaultRequest';
import { FC, useEffect } from 'react';

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
