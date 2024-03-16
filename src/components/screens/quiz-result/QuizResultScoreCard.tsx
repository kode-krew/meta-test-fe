import { FC } from 'react';
import StarIcon from '@src/components/common/Icons/StarIcon';

interface QuizResultScoreCardProps {}

const QuizResultScoreCard: FC<QuizResultScoreCardProps> = () => (
    <div
        className="
        container
    mt-9
    flex
    w-2/4 flex-col items-center justify-center rounded-lg pb-10 pl-3 pr-3 pt-5 shadow-md"
    >
        <span className="font-sans text-3xl font-bold">120 점</span>
        <div className="mt-3 w-full">
            <div className="flex w-full">
                <StarIcon fillRatio={0} />
            </div>
        </div>
        <span className="font-sans text-2xl font-bold">훌륭하네요.</span>
    </div>
);

export default QuizResultScoreCard;
