import { FC } from 'react';
import QuizResultHeaderTitle from '../QuizResultHeaderText';
import QuizResultScoreCard from '../QuizResultScoreCard';

interface QuizResultSummarySectionProps {}

const QuizResultSummarySection: FC<QuizResultSummarySectionProps> = () => (
    <section>
        <QuizResultHeaderTitle />
        <QuizResultScoreCard />
    </section>
);

export default QuizResultSummarySection;
