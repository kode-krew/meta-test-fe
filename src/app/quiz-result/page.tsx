import QuizResultFooter from '@src/components/screens/quiz-result/QuizResultFooter';
import QuizResultDetailSection from '@src/components/screens/quiz-result/section/QuizResultDetailSection';
import QuizResultHistorySection from '@src/components/screens/quiz-result/section/QuizResultHistorySection';
import QuizResultSummarySection from '@src/components/screens/quiz-result/section/QuizResultSummarySection';
import { checkToken } from '@src/lib/server/auth/checkToken';
import { cookies } from 'next/headers';

const QuizAnswerPage = async () => {
    const accessToken = cookies().get('atk')?.value;
    const { isLogin } = await checkToken(accessToken);

    return (
        <div className="flex flex-col">
            <QuizResultSummarySection />
            <QuizResultDetailSection />
            <QuizResultHistorySection isLogin={isLogin} />
            <QuizResultFooter />
        </div>
    );
};

export default QuizAnswerPage;
