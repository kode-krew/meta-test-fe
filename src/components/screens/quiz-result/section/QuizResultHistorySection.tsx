import { FC } from 'react';
import Button from '@src/components/common/Button';
import QuizResultHistoryGraphCard from '../QuizResultHistoryGraphCard';
import QuizResultRankingCard from '../QuizResultRankingCard';

interface QuizResultHistorySectionProps {}

const QuizResultHistorySection: FC<QuizResultHistorySectionProps> = () => (
    <section className="mt-3 flex flex-col">
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold">기록</h1>
            <div>
                <Button variant="primary">마이페이지</Button>
            </div>
        </div>
        <QuizResultHistoryGraphCard />
        <QuizResultRankingCard />
    </section>
);

export default QuizResultHistorySection;
