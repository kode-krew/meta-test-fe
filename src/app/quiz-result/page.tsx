'use client';

import { QuizAnswerForm } from '@src/components/screens/quiz-answer/QuizAnswerForm';
import QuizResultFooter from '@src/components/screens/quiz-result/QuizResultFooter';
import QuizResultDetailSection from '@src/components/screens/quiz-result/section/QuizResultDetailSection';
import QuizResultHistorySection from '@src/components/screens/quiz-result/section/QuizResultHistorySection';
import QuizResultSummarySection from '@src/components/screens/quiz-result/section/QuizResultSummarySection';

const QuizAnswerPage = () => (
    <div className="flex flex-col">
        <QuizResultSummarySection />
        <QuizResultDetailSection />
        <QuizResultHistorySection />
        <QuizResultFooter />
    </div>
);

export default QuizAnswerPage;
