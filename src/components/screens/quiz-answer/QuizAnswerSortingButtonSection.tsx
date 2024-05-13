import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { QuizAnswerFormType } from './QuizAnswerForm';
import QuizAnswerSortingButton from '../../common/QuizAnswerSortingButton';

interface QuizAnswerSortingButtonSectionProps {}

const QuizAnswerSortingButtonSection: FC<QuizAnswerSortingButtonSectionProps> = () => {
    const { control, setValue } = useFormContext<QuizAnswerFormType>();
    const words = useWatch({ control, name: 'answers' });
    const onRemoveWord = ({ selectedWord }: { selectedWord: string }) => {
        const filteredWords = words.filter((word) => word !== selectedWord);
        setValue('answers', filteredWords);
    };

    return (
        <section className="mt-5 flex w-full flex-wrap gap-5">
            {words.length > 0 &&
                words?.map((word) => (
                    <QuizAnswerSortingButton
                        word={word}
                        key={word}
                        onClick={() => {
                            onRemoveWord({ selectedWord: word });
                        }}
                    />
                ))}
        </section>
    );
};

export default QuizAnswerSortingButtonSection;
