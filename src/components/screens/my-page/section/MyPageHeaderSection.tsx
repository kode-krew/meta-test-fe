'use client';

import { FC } from 'react';
import Button from '@src/components/common/Button';
import HomeIcon from '@src/components/common/Icons/HomeIcon';
import { ToastService } from '@src/service/ToastService';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { renewAllCache } from '@src/app/actions/renewAllCache';
import { $api } from '@src/api/api';

interface MyPageHeaderSectionProps {
    isLogin: boolean;
}

const MyPageHeaderSection: FC<MyPageHeaderSectionProps> = ({ isLogin }) => {
    const queryClient = useQueryClient();
    const toastService = ToastService.getInstance();
    const { replace } = useRouter();
    const onClickHome = () => {
        replace('/');
    };
    const onClickLogout = async () => {
        await axios.delete(`${process.env.NEXT_PUBLIC_META_TEST_WEB_HOST_URL}/api/auth`);
        await renewAllCache();
        await queryClient.removeQueries({
            queryKey: $api.queryOptions('get', '/users').queryKey,
        });
        await toastService.addToast('로그아웃 되었습니다.');
        replace('/');
    };

    return (
        <section className="relative">
            <div className="flex w-full justify-between">
                <div
                    onClick={onClickHome}
                    className="h-15 w-15 flex cursor-pointer items-center justify-center rounded-md shadow-md"
                >
                    <HomeIcon />
                </div>
                <h1
                    className="
                  flex 
                  max-w-3xl
                  items-center
                  justify-center
                  text-center text-2xl font-bold 
                  "
                >
                    마이페이지
                </h1>
                <div className="w-34">
                    {isLogin ? (
                        <Button variant="primary-unselect" type="button" onClick={onClickLogout}>
                            로그아웃
                        </Button>
                    ) : null}
                </div>
            </div>
            <hr
                className="absolute -bottom-5  -left-5 h-1 w-screen
            max-w-3xl
            bg-violet-400"
            />
        </section>
    );
};

export default MyPageHeaderSection;
