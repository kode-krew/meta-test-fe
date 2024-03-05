import Index from '@src/app/[locale]/page';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('홈화면 랜더링 테스트', () => {
    it('퀴즈 모달이 제대로 열리고 닫히는지 테스트', () => {
        render(<Index />);

        // 퀴즈 모달을 열 버튼을 찾아 클릭
        const quizModalButton = screen.getByText('테스트 시작');
        fireEvent.click(quizModalButton);

        // 퀴즈 모달이 열렸는지 확인
        const quizModal = screen.getByTestId('quiz-modal');
        expect(quizModal).toBeVisible();

        // 퀴즈 모달을 닫는 버튼을 찾아 클릭
        const closeQuizModalButton = screen.getByText('취소');
        fireEvent.click(closeQuizModalButton);

        // 퀴즈 모달이 닫혔는지 확인
        expect(quizModal).not.toBeVisible();
    });
});
