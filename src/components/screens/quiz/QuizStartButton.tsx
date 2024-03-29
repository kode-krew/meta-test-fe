import React, { FC, MouseEventHandler } from 'react';
import Button from '@src/components/common/Button';

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

export default React.memo(QuizStartButton);
