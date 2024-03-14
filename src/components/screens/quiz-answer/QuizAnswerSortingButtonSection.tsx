import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { QuizAnswerFormType } from './QuizAnswerForm';
import QuizAnswerSortingButton from '../../common/QuizAnswerSortingButton';

interface QuizAnswerSortingButtonSectionProps {}

const QuizAnswerSortingButtonSection: FC<QuizAnswerSortingButtonSectionProps> = () => {
    const { control } = useFormContext<QuizAnswerFormType>();
    const words = useWatch({ control, name: 'answers' });

    return (
        <section className="mt-5 flex w-full flex-wrap gap-5">
            {words.length > 0 &&
                words?.map((item) => <QuizAnswerSortingButton word={item} key={item} />)}
        </section>
    );
};

export default QuizAnswerSortingButtonSection;
