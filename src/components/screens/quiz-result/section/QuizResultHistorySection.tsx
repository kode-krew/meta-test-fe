'use client';

import { FC } from 'react';
import Button from '@src/components/common/Button';
import QuizResultHistoryGraphCard from '@src/components/common/quiz-result/QuizResultHistoryGraphCard';
import QuizResultRankingCard from '@src/components/common/quiz-result/QuizResultRankingCard';
import { useRouter } from 'next/navigation';

interface QuizResultHistorySectionProps {
    isLogin: boolean;
}

const QuizResultHistorySection: FC<QuizResultHistorySectionProps> = ({ isLogin }) => {
    const { push } = useRouter();
    const onClick = () => {
        push('/my-page');
    };
    return (
        <section className="mt-8 flex flex-col">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">기록</h1>
                {isLogin && (
                    <div>
                        <Button variant="primary" onClick={onClick}>
                            마이페이지
                        </Button>
                    </div>
                )}
            </div>
            <QuizResultHistoryGraphCard isLogin={isLogin} />
        </section>
    );
};

export default QuizResultHistorySection;
