import { FC, MouseEventHandler, useState } from 'react';
import Button from '@src/components/common/Button';
import Modal from '@src/components/common/Modal';

interface QuizStartButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}

const QuizStartButton: FC<QuizStartButtonProps> = ({ onClick, disabled }) => (
    <div className="relative -bottom-2/3 w-full">
        <Button variant="primary" onClick={onClick} disabled={disabled}>
            퀴즈 시작
        </Button>
    </div>
);

export default QuizStartButton;
