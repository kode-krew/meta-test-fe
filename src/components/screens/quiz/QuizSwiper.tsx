import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import QuizCard from './QuizCard';

interface QuizSwiperProps {
    count: number;
}

const mock = Array.from({ length: 5 }).map((_, index) => ({ id: index, value: index.toString() }));

const QuizSwiper: FC<QuizSwiperProps> = ({ count }) => {
    const { replace } = useRouter();
    const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (_: SwiperClass, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    useEffect(() => {
        if (!count) {
            controlledSwiper?.autoplay.start();
        }
    }, [controlledSwiper?.autoplay, count]);

    return (
        <Swiper
            centeredSlides // 가운데 정렬
            slidesPerView={1} // 한 슬라이드에 보여줄 갯수
            spaceBetween={50} // 슬라이드간 거리
            // 슬라이드 반복 여부
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            onSwiper={(swiper) => {
                setControlledSwiper(swiper);
                if (count) {
                    swiper.autoplay.stop();
                }
            }}
            autoplay={{
                delay: 3000,
                stopOnLastSlide: true,
                disableOnInteraction: true,
                waitForTransition: true,
            }} // 자동 슬라이드 시간
            coverflowEffect={{
                depth: 300,
                slideShadows: true,
            }}
            onSlideChange={(swiper) => {
                if (swiper.isEnd) {
                    setTimeout(() => {
                        replace('/quiz-answer');
                    }, 3000);
                }
            }}
            allowTouchMove={false}
            modules={[Autoplay, EffectCoverflow]}
            className="h-full w-full"
            effect="coverflow"
        >
            {mock.map((item) => (
                <SwiperSlide key={item.id} className="h-full w-full">
                    <QuizCard words={item.value} />
                </SwiperSlide>
            ))}

            {!count ? (
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20" />
                    </svg>
                    <span ref={progressContent} />
                </div>
            ) : null}
        </Swiper>
    );
};

export default React.memo(QuizSwiper);
