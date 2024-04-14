import React, { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import CommonInput from '@src/components/common/CommonInput';
import { QuizListService } from '@src/service/QuizListService';
import { useFormContext } from 'react-hook-form';
import type { QuizAnswerExpectationPopupFormValue } from './QuizAnswerExpectationForm';

interface QuizAnswerExpectationInputProps {}

const QuizAnswerExpectationInput: FC<QuizAnswerExpectationInputProps> = () => {
    const quizListService = QuizListService.getInstance();
    const {
        register,
        formState: { errors },
    } = useFormContext<QuizAnswerExpectationPopupFormValue>();
    return (
        <div className="flex flex-col">
            <CommonInput
                placeholder="개수를 입력해 주세요."
                type="text"
                variant="primary"
                {...register('expectationNumber', {
                    validate: {
                        valueFormat: (value) =>
                            (!Number.isNaN(Number(value)) && !value.includes('.')) ||
                            '소수점을 제외한 숫자만 입력해주세요.',
                        valueRange: (value) =>
                            (Number(value) >= 1 &&
                                Number(value) <= quizListService.getQuizList().length) ||
                            '퀴즈의 최대 갯수까지만 입력가능해요.',
                    },
                })}
            />

            <ErrorMessage
                errors={errors}
                name="expectationNumber"
                render={({ message }) => <span className="text-red-600">{message}</span>}
            />
        </div>
    );
};

export default React.memo(QuizAnswerExpectationInput);
