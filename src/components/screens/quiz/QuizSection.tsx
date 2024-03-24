import { FC, useCallback, useState } from 'react';
import { ModalService } from '@src/components/common/modal/ModalService';
import 'swiper/css';
import QuizStartButton from './QuizStartButton';
import QuizSwiper from './QuizSwiper';
import QuizTimer from './QuizTimer';
import './quiz-swiper.css';

interface QuizSectionProps {}

const QuizSection: FC<QuizSectionProps> = () => {
    const [count, setCount] = useState<number>(3);
    const modalService = ModalService.getInstance();

    const onChangeCount = useCallback(() => {
        setCount(0);
        modalService.closeModal();
    }, [modalService]);

    const onClick = () => {
        modalService.openModal(
            <QuizTimer count={count} onChangeCount={onChangeCount} />,
            'bg-black',
        );
    };

    return (
        <div className="container relative h-1/4 w-full border">
            <QuizSwiper count={count} />
            <QuizStartButton onClick={onClick} />
        </div>
    );
};

export default QuizSection;
