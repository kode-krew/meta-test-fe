import QuizResultFooter from '@src/components/screens/quiz-result/QuizResultFooter';
import QuizResultDetailSection from '@src/components/screens/quiz-result/section/QuizResultDetailSection';
import QuizResultHistorySection from '@src/components/screens/quiz-result/section/QuizResultHistorySection';
import QuizResultSummarySection from '@src/components/screens/quiz-result/section/QuizResultSummarySection';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const QuizAnswerPage = () => {
    const token = getCookie('refreshToken', { cookies });

    return (
        <div className="flex flex-col">
            <QuizResultSummarySection />
            <QuizResultDetailSection />
            <QuizResultHistorySection isLoginSns={!!token} />
            <QuizResultFooter />
        </div>
    );
};

export default QuizAnswerPage;
