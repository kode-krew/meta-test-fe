'use client';

import { FC } from 'react';
import { API_GET_USER_PROFILE, getUserProfile } from '@src/api/getUserProfile';
import { API_GET_USER_TEST_DETAIL, getUserTestDetail } from '@src/api/getUserTestDetail';
import StarIcon from '@src/components/common/Icons/StarIcon';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

interface QuizResultScoreCardProps {}

const QuizResultScoreCard: FC<QuizResultScoreCardProps> = () => {
    const queryParams = useSearchParams();
    const userProfileQuery = useQuery({
        queryKey: [API_GET_USER_PROFILE],
        queryFn: () => getUserProfile(),
    });

    const userTestQuery = useQuery({
        queryKey: [API_GET_USER_TEST_DETAIL],
        queryFn: () =>
            getUserTestDetail({
                id: queryParams.get('id') || '',
                sort_key: queryParams.get('sort_key') || '',
            }),
        enabled: !!queryParams.get('id') && !!queryParams.get('sort_key'),
    });

    return (
        <div
            className="
            container
        mt-9
        flex
        w-2/4 flex-col items-center justify-center rounded-lg pb-10 pl-3 pr-3 pt-5 shadow-md"
        >
            <span className="font-sans text-3xl font-bold">{userTestQuery.data?.score}점</span>
            <div className="mt-3 w-full">
                <div className="flex w-full">
                    <StarIcon fillRatio={0} />
                </div>
            </div>
            <span className="font-sans text-2xl font-bold">훌륭하네요.</span>
        </div>
    );
};

export default QuizResultScoreCard;
