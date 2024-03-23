import { FC } from 'react';
import QuizResultRankingBox from './QuizResultRankingBox';

interface QuizResultRankingCardProps {}

const QuizResultRankingCard: FC<QuizResultRankingCardProps> = () => (
    <section className="mt-3 flex flex-col gap-5 rounded-md  pb-5 pl-3 pr-3 pt-5 shadow-md">
        <h1 className="font-middle text-lg">랭킹</h1>
        <QuizResultRankingBox />
    </section>
);

export default QuizResultRankingCard;
