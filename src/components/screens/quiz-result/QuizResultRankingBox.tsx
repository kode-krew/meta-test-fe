import { FC } from 'react';
import { array } from 'zod';

interface QuizResultRankingBoxProps {}

const QuizResultRankingBox: FC<QuizResultRankingBoxProps> = () => (
    <section className="flex flex-col gap-2">
        <section className="container flex rounded-md border border-violet-400 bg-violet-100 pb-4 pl-4 pr-4 pt-4">
            <section className="flex w-1/4 flex-col items-center justify-center gap-8">
                <h1 className="text-violet-500">총점 랭킹</h1>
                <div className="flex flex-col">
                    <span>...</span>
                    <span className="mb-6 mt-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span>...</span>
                </div>
            </section>
            <div className="ml-4 mr-4 flex flex-col items-center justify-center pt-5">
                <hr className=" h-full w-1 border border-violet-400 bg-violet-400" />
            </div>
            <section className="flex w-1/4 flex-col items-center justify-center gap-8">
                <h1 className="text-violet-500">초급 랭킹</h1>
                <div className="flex flex-col">
                    <span>...</span>
                    <span className="mb-6 mt-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span className="mb-6">360. 닉네임1</span>
                    <span>...</span>
                </div>
            </section>
            <div className="ml-4 mr-4 flex flex-col items-center justify-center pt-5">
                <hr className=" h-full border border-violet-400 bg-violet-400" />
            </div>
            <section className="flex w-1/4 flex-col items-center justify-center">
                <h1 className="text-violet-500">중급 랭킹</h1>
                <div className="flex h-full flex-col justify-center">
                    <span>데이터 없음</span>
                </div>
            </section>
            <div className="ml-4 mr-4 flex flex-col items-center justify-center pt-5">
                <hr className=" h-full border border-violet-400 bg-violet-400" />
            </div>
            <section className="flex w-1/4 flex-col items-center justify-center">
                <h1 className="text-violet-500">고급 랭킹</h1>
                <div className="flex h-full flex-col justify-center">
                    <span>데이터 없음</span>
                </div>
            </section>
        </section>
        <section className="flex w-full justify-evenly">
            {Array.from({ length: 4 })
                .fill(0)
                .map((v, i) => (
                    <div className="flex w-full justify-center" key={Math.random()}>
                        <span className="font-bold">{i}위</span>
                    </div>
                ))}
        </section>
    </section>
);

export default QuizResultRankingBox;
