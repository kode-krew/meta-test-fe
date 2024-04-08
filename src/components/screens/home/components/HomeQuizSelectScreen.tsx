'use-client';

import { ChangeEvent, FC, MouseEvent, MouseEventHandler, useState } from 'react';
import Button from '@src/components/common/Button';
import SelectBox, { SelectBoxOptionType } from '@src/components/common/SelectBox';
import { useRouter } from 'next/navigation';

interface HomeQuizSelectScreenProps {
    onClickButton: MouseEventHandler<HTMLButtonElement>;
    testId: string;
}

const options: SelectBoxOptionType[] = [
    {
        id: 'beginner',
        label: '10개 - 초급',
    },
    {
        id: 'intermediate',
        label: '20개 - 중급',
    },
    {
        id: 'advanced',
        label: '30개 - 고급',
    },
];

const HomeQuizSelectScreen: FC<HomeQuizSelectScreenProps> = ({ onClickButton, testId }) => {
    const router = useRouter();
    const { push } = router;
    const [selectedOption, setSelectedOption] = useState('beginner');

    const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const onClickQuizButton = (e: MouseEvent<HTMLButtonElement>) => {
        onClickButton(e);
        push(`/quiz?difficulty=${selectedOption}`);
    };

    return (
        <div
            className="container
        flex
        w-96
        flex-col
        gap-y-5 
        rounded bg-white pb-5
        pl-3
        pr-3
        pt-5
        "
            data-testid={testId}
        >
            <p className="text-2xl font-bold">테스트 단어 수 선택</p>
            <SelectBox
                options={options}
                onOptionChange={onOptionChange}
                selectedOption={selectedOption}
            />
            <div className="flex gap-4">
                <Button variant="primary-unselect" onClick={onClickButton}>
                    취소
                </Button>
                <Button variant="primary" onClick={onClickQuizButton}>
                    확인
                </Button>
            </div>
        </div>
    );
};

export default HomeQuizSelectScreen;
