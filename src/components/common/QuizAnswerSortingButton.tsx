import { FC, MouseEventHandler } from 'react';
import CloseIcon from '@src/components/common/Icons/CloseIcon';
import QuizCorrectCircleIcon from './Icons/QuizCorrectCircleIcon';
import QuizInCorrectCrossIcon from './Icons/QuizInCorrectCrossIcon';

interface QuizAnswerSortingButtonProps {
    word: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    isCorrect?: boolean;
}

const QuizAnswerSortingButton: FC<QuizAnswerSortingButtonProps> = ({
    word,
    onClick,
    isCorrect,
}) => (
    <div
        className="container relative flex h-12 w-full max-w-max 
        items-center
    justify-center
    rounded-3xl bg-yellow-200 pb-2 pl-5 pr-5 pt-2 shadow-md"
    >
        {onClick && (
            <div className="absolute -right-1 -top-2 cursor-pointer">
                <CloseIcon />
            </div>
        )}
        {isCorrect && (
            <div className="absolute  opacity-75">
                <QuizCorrectCircleIcon />
            </div>
        )}
        {!isCorrect && isCorrect !== undefined && (
            <div className="absolute  opacity-75">
                <QuizInCorrectCrossIcon />
            </div>
        )}

        <span>{word}</span>
    </div>
);

export default QuizAnswerSortingButton;
