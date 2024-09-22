import React, { Suspense } from 'react';
import QuizBanner from '@src/components/screens/quiz/QuizBanner';
import QuizSection from '@src/components/screens/quiz/QuizSection';

export default function QuizPageIndex() {
    return (
        <div
            className="
                flex
                h-screen
                w-screen
                items-center
                justify-center"
        >
            <section className="flex  h-screen w-full max-w-3xl flex-col items-center gap-5 bg-zinc-100 p-5">
                <Suspense>
                    <QuizBanner />
                    <QuizSection />
                </Suspense>
            </section>
        </div>
    );
}
