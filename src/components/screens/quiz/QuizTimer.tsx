import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { ModalService } from '@src/service/ModalService';

interface QuizTimerProps {
    count: number;
    onChangeCount: VoidFunction;
}

const QuizTimer: FC<QuizTimerProps> = ({ count, onChangeCount }) => {
    const [timerCount, setTimerCount] = useState(count);

    useLayoutEffect(() => {
        if (!timerCount) {
            onChangeCount();
        }
    }, [onChangeCount, timerCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerCount((prevCount) => {
                if (prevCount === 1) {
                    // prevCount가 1이면 다음 감소 후 0이 됩니다.
                    // onChangeCount();
                    clearInterval(interval); // 타이머 정지
                }
                return prevCount - 1; // prevCount 감소
            });
        }, 1500);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
    }, [onChangeCount]); // 의존성 배열에 test 포함

    return <span className="text-4xl text-white">{timerCount}</span>;
};

export default QuizTimer;
