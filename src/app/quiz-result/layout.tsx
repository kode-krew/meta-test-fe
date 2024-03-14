import React from 'react';

type Props = {
    children: React.ReactNode;
};

const QuizAnswerLayout = ({ children }: Props) => (
    <div
        className="
flex
h-screen
w-screen
items-center
justify-center"
    >
        <section
            className="flex  
        h-screen
            w-full
        max-w-3xl
        flex-col
        items-center gap-5 border-l border-r border-violet-300 bg-white p-5 pb-8 pl-5 pr-5 pt-10 shadow-md"
        >
            {children}
        </section>
    </div>
);

export default QuizAnswerLayout;
