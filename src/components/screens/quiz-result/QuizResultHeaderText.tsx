import { FC } from 'react';

interface QuizResultHeaderTitleProps {}

const QuizResultHeaderTitle: FC<QuizResultHeaderTitleProps> = () => (
    <section>
        <h1 className="font-sans text-4xl font-bold">00님의 테스트 결과</h1>
        <hr className="mt-4 border-2 border-violet-400" />
    </section>
);

export default QuizResultHeaderTitle;
