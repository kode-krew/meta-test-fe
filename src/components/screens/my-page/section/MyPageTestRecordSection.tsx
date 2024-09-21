import { FC } from 'react';
import QuizResultHistoryGraphCard from '@src/components/common/quiz-result/QuizResultHistoryGraphCard';

interface MyPageTestRecordSectionProps {
    isLogin: boolean;
}

const MyPageTestRecordSection: FC<MyPageTestRecordSectionProps> = ({ isLogin }) => (
    <section className="flex flex-col">
        <h1 className="text-2xl font-bold">나의 테스트 기록</h1>
        <QuizResultHistoryGraphCard isLogin={isLogin} />
    </section>
);

export default MyPageTestRecordSection;
