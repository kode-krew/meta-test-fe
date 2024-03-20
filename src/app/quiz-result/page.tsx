'use client';

import { QuizAnswerForm } from '@src/components/screens/quiz-answer/QuizAnswerForm';
import QuizResultDetailSection from '@src/components/screens/quiz-result/section/QuizResultDetailSection';
import QuizResultSummarySection from '@src/components/screens/quiz-result/section/QuizResultSummarySection';

const QuizAnswerPage = () => (
    <div className="flex flex-col">
        <QuizResultSummarySection />
        <QuizResultDetailSection />
    </div>
);

export default QuizAnswerPage;
