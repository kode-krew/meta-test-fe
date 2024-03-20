import { FC } from 'react';
import SelectBox, { SelectBoxOptionType } from '@src/components/common/SelectBox';
import QuizResultBarChart from './QuizResultBarChart';

interface QuizResultHistoryGraphCardProps {}

const options: SelectBoxOptionType[] = [{ id: 'all', label: '전체' }];

const QuizResultHistoryGraphCard: FC<QuizResultHistoryGraphCardProps> = () => (
    <section className="mt-3 w-full rounded-md border border-none p-5 shadow-md">
        <article className="flex w-full justify-between">
            <h3 className="w-full">테스트 점수 기록</h3>
            <div className="w-36">
                <SelectBox options={options} />
            </div>
        </article>
        <section className="h-80 w-full">
            <QuizResultBarChart />
        </section>
    </section>
);

export default QuizResultHistoryGraphCard;
