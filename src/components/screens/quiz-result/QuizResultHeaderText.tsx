'use client';

import { FC } from 'react';
import { API_GET_USER_PROFILE, getUserProfile } from '@src/api/getUserProfile';
import { useQuery } from '@tanstack/react-query';
import { $api } from '@src/api/api';

interface QuizResultHeaderTitleProps {}

const QuizResultHeaderTitle: FC<QuizResultHeaderTitleProps> = () => {
    const { data: userData } = $api.useQuery('get', '/users');

    return (
        <section>
            <h1 className="font-sans text-4xl font-bold">
                {userData?.nickname ?? 'ooo'}님의 테스트 결과
            </h1>
            <hr className="mt-4 border-2 border-violet-400" />
        </section>
    );
};

export default QuizResultHeaderTitle;
