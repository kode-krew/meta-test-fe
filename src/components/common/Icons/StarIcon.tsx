import { FC, useMemo } from 'react';

interface StarIconProps {
    fillRatio: 0 | 0.5 | 1;
}

const StarIcon: FC<StarIconProps> = ({ fillRatio }) => {
    const gradientStops = useMemo(() => {
        switch (fillRatio) {
            case 0:
                return [
                    { offset: '0%', color: 'transparent' },
                    { offset: '50%', color: 'transparent' },
                    { offset: '51%', color: 'transparent' },
                    { offset: '100%', color: 'transparent' },
                ];
            case 0.5:
                return [
                    { offset: '0%', color: '#ffdd00' },
                    { offset: '50%', color: '#ffdd00' },
                    { offset: '51%', color: 'transparent' },
                    { offset: '100%', color: 'transparent' },
                ];

            default:
                return [
                    { offset: '0%', color: '#ffdd00' },
                    { offset: '50%', color: '#ffdd00' },
                    { offset: '51%', color: '#ffdd00' },
                    { offset: '100%', color: '#ffdd00' },
                ];
        }
    }, [fillRatio]);

    return (
        <svg
            fill="#ffdd00"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="30px"
            height="30px"
            viewBox="0 0 40 40"
            xmlSpace="preserve"
            stroke="#ffdd00"
        >
            <defs>
                <clipPath id="clip-star">
                    <rect x="0" y="0" width="40" height="40" rx="5" />
                </clipPath>

                <linearGradient id="gradient-star" x1="0" y1="0" x2="1" y2="0">
                    {gradientStops.map((stop) => (
                        <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
                    ))}
                </linearGradient>
            </defs>
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.070176"
            />
            <g id="SVGRepo_iconCarrier">
                {/* Apply clipPath and gradient fill */}
                <g clipPath="url(#clip-star)">
                    <path
                        d="M34.921,14.075l-8.87,7.93l2.517,11.628c0.042,0.193-0.035,0.394-0.195,0.511c-0.087,0.062-0.189,0.097-0.294,0.097 c-0.086,0-0.173-0.022-0.251-0.067l-10.284-5.986L7.26,34.172c-0.172,0.099-0.385,0.088-0.545-0.028 c-0.16-0.115-0.236-0.314-0.194-0.51l2.515-11.628l-8.87-7.93c-0.147-0.134-0.203-0.341-0.142-0.527 c0.061-0.188,0.228-0.322,0.425-0.343l11.837-1.201l4.8-10.887c0.16-0.361,0.755-0.361,0.915,0l4.799,10.887l11.838,1.201 c0.196,0.021,0.363,0.152,0.426,0.343C35.124,13.735,35.068,13.94,34.921,14.075z"
                        fill="url(#gradient-star)" /* Apply gradient fill */
                        strokeWidth="2" /* Adjust stroke width if needed */
                    />
                </g>
            </g>
        </svg>
    );
};

export default StarIcon;
