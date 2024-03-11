import { FC } from 'react';
import Button from '@src/components/common/Button';

interface QuizAnswerSubmitButtonProps {}

const QuizAnswerSubmitButton: FC<QuizAnswerSubmitButtonProps> = () => (
    <Button variant="primary">제출하기</Button>
);

export default QuizAnswerSubmitButton;
