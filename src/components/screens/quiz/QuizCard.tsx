import React, { FC } from 'react';

interface QuizCardProps {
    words: string;
}

const QuizCard: FC<QuizCardProps> = ({ words }) => (
    <div
        className="   
       
        flex
        h-full
        w-full
        items-center
        justify-center
        rounded
        border
        border-emerald-400
        bg-teal-100
        "
    >
        <h1>{words}</h1>
    </div>
);

export default React.memo(QuizCard);
