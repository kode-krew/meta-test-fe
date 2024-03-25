import { FC } from 'react';

interface HomeIconProps {}

const HomeIcon: FC<HomeIconProps> = () => (
    <svg
        fill="#000000"
        width="45px"
        height="45px"
        viewBox="0 0 24 24"
        id="home-alt-1"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path
                id="primary"
                d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,1.42,1.42l.29-.3V20.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,11.29Z"
                fill="#000000"
            />
        </g>
    </svg>
);

export default HomeIcon;
