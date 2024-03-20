import { FC } from 'react';
import QuizResultDetailInfoCard from '../QuizResultDetailInfoCard';

interface QuizResultDetailSectionProps {}

const QuizResultDetailSection: FC<QuizResultDetailSectionProps> = () => (
    <section className="mt-5 flex w-full flex-col gap-3">
        <h1 className="flex w-full  text-2xl font-bold">상세내역</h1>
        <QuizResultDetailInfoCard />
    </section>
);

export default QuizResultDetailSection;
