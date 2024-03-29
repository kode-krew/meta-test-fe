import { FC, useEffect, useRef, useState } from 'react';
import Modal from '@src/components/common/modal/Modal';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import QuizCard from './QuizCard';
import QuizStartButton from './QuizStartButton';
import './quiz-swiper.css';

interface QuizSectionProps {}
const mock = Array.from({ length: 5 }).map((_, index) => ({ id: index, value: index.toString() }));

const QuizSection: FC<QuizSectionProps> = () => {
    const { replace } = useRouter();
    const [isShowModal, setIsShowModal] = useState(false);
    const [count, setCount] = useState<number>(3);
    const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onClick = () => {
        setIsShowModal((prev) => !prev);
    };
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isShowModal) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1500);
            if (count === 0) {
                setCount(3);
                setIsShowModal(false);
                clearInterval(interval);
            }
        }

        return () => {
            clearInterval(interval);
        };
    }, [controlledSwiper, count, isShowModal]);
    useEffect(() => {
        if (!count) {
            controlledSwiper?.autoplay.start();
        }
    }, [controlledSwiper?.autoplay, count]);
    const onAutoplayTimeLeft = (_: SwiperClass, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className="container relative h-1/4 w-full border">
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

                {controlledSwiper && controlledSwiper?.autoplay?.running ? (
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20" />
                        </svg>
                        <span ref={progressContent} />
                    </div>
                ) : null}
            </Swiper>
            {isShowModal && (
                <Modal backGroundColor="bg-black">
                    <span
                        className="
                    text-5xl
                    text-white"
                    >
                        {count}
                    </span>
                </Modal>
            )}
            <QuizStartButton onClick={onClick} disabled={!!controlledSwiper?.autoplay?.running} />
        </div>
    );
};

export default QuizSection;
