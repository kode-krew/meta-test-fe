'use client';

import { FC } from 'react';
import { API_GET_USER_TEST_DETAIL, getUserTestDetail } from '@src/api/getUserTestDetail';
import QuizCorrectCircleIcon from '@src/components/common/Icons/QuizCorrectCircleIcon';
import QuizAnswerSortingButton from '@src/components/common/QuizAnswerSortingButton';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface QuizResultDetailInfoCardProps {}

const QuizResultDetailInfoCard: FC<QuizResultDetailInfoCardProps> = () => {
    const queryParams = useSearchParams();
    const id = queryParams.get('id');
    const sortKey = queryParams.get('sort_key');

    console.log(id, sortKey);

    const { data } = useQuery({
        queryKey: [API_GET_USER_TEST_DETAIL],
        queryFn: () => getUserTestDetail({ id: String(id), sort_key: String(sortKey) }),
    });

    return (
        <section className="w-full rounded-md border-none p-5 shadow-md">
            <article className="mb-3 flex flex-col gap-2">
                <p>테스트 단어: 10개</p>
                <div className="flex flex-wrap gap-3">
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                    <QuizAnswerSortingButton word="의자" />
                </div>
            </article>
            <article className="mb-3 flex flex-col">
                <p>예측 단어 수: 5개</p>
            </article>
            <article className="flex  flex-col gap-2 ">
                <p>맞춘 단어 수: 4개</p>
                <div className="flex flex-wrap gap-3">
                    <QuizAnswerSortingButton word="의자sdfsdfdsfdsfdsfsdf" isCorrect />
                </div>
            </article>
        </section>
    );
};

export default QuizResultDetailInfoCard;
