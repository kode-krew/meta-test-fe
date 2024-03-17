import { FC } from 'react';

interface CaretIconProps {}

const CaretIcon: FC<CaretIconProps> = () => (
    <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {' '}
            <g id="Arrow / Caret_Down_MD">
                {' '}
                <path
                    id="Vector"
                    d="M16 10L12 14L8 10"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />{' '}
            </g>{' '}
        </g>
    </svg>
);

export default CaretIcon;
