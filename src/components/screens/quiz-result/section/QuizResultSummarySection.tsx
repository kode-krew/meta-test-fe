import { FC } from 'react';
import QuizResultHeaderTitle from '../QuizResultHeaderText';
import QuizResultScoreCard from '../QuizResultScoreCard';

interface QuizResultSummarySectionProps {}

const QuizResultSummarySection: FC<QuizResultSummarySectionProps> = () => (
    <section className="flex w-full flex-col items-center justify-center">
        <QuizResultHeaderTitle />
        <QuizResultScoreCard />
    </section>
);

export default QuizResultSummarySection;
