import React, { useMemo, useRef } from 'react';

import { faker } from '@faker-js/faker';
import { GetUserTestResponse } from '@src/types/api/test';
import { InfinitePaginationDataType } from '@src/types/common/InfinitePaginationType';
import { InfiniteData } from '@tanstack/react-query';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import dayjs from 'dayjs';
import { Bar } from 'react-chartjs-2';
import './bar-chart.css';

interface QuizResultBarChartProps {
    chartData?: InfiniteData<InfinitePaginationDataType<'items', GetUserTestResponse>>;
    onObserve: VoidFunction;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options: ChartOptions<'bar'> = {
    layout: {
        padding: {
            bottom: 21,
        },
    },
    scales: {
        x: {
            ticks: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            afterFit: (ctx) => {
                ctx.width = 40;
            },
        },
    },
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
};
// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'ssss',
//     'April',
//     'May',
//     'June',
//     'July',
//     'ssss',
// ];

const QuizResultBarChart: React.FC<QuizResultBarChartProps> = ({ chartData, onObserve }) => {
    const labels = useMemo(
        () =>
            chartData?.pages.flatMap((charts) =>
                charts.items.flatMap((chart) => dayjs(chart.createdAt).format('MM.DD')),
            ),
        [chartData?.pages],
    );
    const scores = useMemo(
        () =>
            chartData?.pages
                .map((chart) => chart.items.flatMap((value) => value.score))
                .flatMap((value) => value),
        [chartData?.pages],
    );
    const options2: ChartOptions<'bar'> = {
        layout: {
            padding: {
                top: 10,
            },
        },
        scales: {
            x: {
                // bar 너비 조정
                ticks: {
                    maxTicksLimit: labels?.length,
                    padding: 0,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    drawTicks: true,
                    lineWidth: 2,
                    tickLength: 1,
                },
            },
        },
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: scores,
                backgroundColor: '#6ac8d8',
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
                borderWidth: 1,
                // 막대의 너비 고정
                barThickness: 14, // 바의 너비를 14px로 고정
                // 데이터의 양에 따라 동적으로 조절
                barPercentage: 0.8, // 예시 값, 실제로는 데이터 양에 따라 조절 필요
                categoryPercentage: 0.8, // 예시 값, 실제로는 데이터 양에 따라 조절 필요
            },
        ],
    };
    const chartContainerRef = useRef<HTMLDivElement>(null);

    const smoothScrollTo = (targetX: number) => {
        if (!chartContainerRef.current) return;

        const startX = chartContainerRef.current.scrollLeft;
        const distance = targetX - startX;
        const duration = 500; // milliseconds

        let startTime: number;

        const animateScroll = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            if (chartContainerRef.current) {
                chartContainerRef.current.scrollLeft = startX + distance * progress;
            }

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const handleScrollLeft = () => {
        if (chartContainerRef.current) {
            const targetX =
                chartContainerRef.current.scrollLeft - chartContainerRef.current.clientWidth * 0.5;
            smoothScrollTo(targetX);
        }
    };

    const handleScrollRight = () => {
        if (chartContainerRef.current) {
            const targetX =
                chartContainerRef.current.scrollLeft + chartContainerRef.current.clientWidth * 0.5;
            smoothScrollTo(targetX);
            onObserve();
        }
    };

    return (
        <div className="chartBox">
            <div
                className="mr-4 flex cursor-pointer flex-col justify-center"
                onClick={handleScrollLeft}
            >
                ◀
            </div>
            <div className="colSmall">
                <Bar options={options} data={data} />
            </div>
            <div className="colLarge" ref={chartContainerRef}>
                <div className="box">
                    <Bar options={options2} data={data} />
                </div>
            </div>
            <div
                className="ml-4 flex cursor-pointer flex-col justify-center "
                onClick={handleScrollRight}
            >
                ▶
            </div>
        </div>
    );
};

export default QuizResultBarChart;
