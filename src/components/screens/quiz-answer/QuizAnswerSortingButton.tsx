import { FC } from 'react';
import CloseIcon from '@src/components/common/Icons/CloseIcon';

interface QuizAnswerSortingButtonProps {
    word: string;
}

const QuizAnswerSortingButton: FC<QuizAnswerSortingButtonProps> = ({ word }) => (
    <div
        className="container relative flex h-12 w-full max-w-max 
        items-center
    justify-center
    rounded-3xl bg-yellow-200 pb-2 pl-5 pr-5 pt-2 shadow-md"
    >
        <div className="absolute -right-1 -top-2 cursor-pointer">
            <CloseIcon />
        </div>
        <span>{word}</span>
    </div>
);

export default QuizAnswerSortingButton;
