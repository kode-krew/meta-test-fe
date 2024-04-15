import { FC } from 'react';
import Button from '@src/components/common/Button';
import { useFormContext, useWatch } from 'react-hook-form';
import type { QuizAnswerExpectationPopupFormValue } from './QuizAnswerExpectationForm';

interface QuizAnswerExpectationSubmitButtonProps {}

const QuizAnswerExpectationSubmitButton: FC<QuizAnswerExpectationSubmitButtonProps> = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<QuizAnswerExpectationPopupFormValue>();
    const expectationNumber = useWatch({ control, name: 'expectationNumber' });

    return (
        <Button
            variant="primary"
            type="submit"
            disabled={!expectationNumber || !!errors.expectationNumber}
        >
            확인
        </Button>
    );
};
export default QuizAnswerExpectationSubmitButton;
