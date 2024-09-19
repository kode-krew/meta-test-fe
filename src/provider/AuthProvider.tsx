'use client';

import { AuthService } from '@src/service/AuthService';
import { FC, useEffect } from 'react';

interface IAuthProviderProps {
    accessToken?: string;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ accessToken }) => {
    const { setAccessToken } = AuthService.getInstance();

    useEffect(() => {
        if (accessToken) {
            setAccessToken(accessToken);
        }
    }, [accessToken, setAccessToken]);
    return <></>;
};
