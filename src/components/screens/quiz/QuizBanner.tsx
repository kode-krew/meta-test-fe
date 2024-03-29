import React, { FC } from 'react';

interface QuizBannerProps {}

const QuizBanner: FC<QuizBannerProps> = () => (
    <div
        className="// container mt-10
            flex
            h-auto
            w-full
            flex-col gap-2
            rounded-md
         border border-violet-300
        bg-violet-400  p-3
         "
    >
        <span>테스트 시작 버튼을 누르면, 테스트가 시작됩니다.</span>
        <span>각 단어가 연속적으로 화면에서 3초 동안 보여지게 됩니다.</span>
        <span>최대한 많은 단어를 외우세요.</span>
    </div>
);

export default React.memo(QuizBanner);
