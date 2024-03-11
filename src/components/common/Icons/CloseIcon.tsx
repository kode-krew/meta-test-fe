import { FC } from 'react';

interface CloseIconProps {}

const CloseIcon: FC<CloseIconProps> = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0,0,256,256"
        width="30px"
        height="30px"
    >
        <g
            fill="red"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{
                mixBlendMode: 'normal',
            }}
        >
            <g transform="scale(8.53333,8.53333)">
                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16.414,15c0,0 3.139,3.139 3.293,3.293c0.391,0.391 0.391,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0c-0.154,-0.153 -3.293,-3.293 -3.293,-3.293c0,0 -3.139,3.139 -3.293,3.293c-0.391,0.391 -1.024,0.391 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.153,-0.154 3.293,-3.293 3.293,-3.293c0,0 -3.139,-3.139 -3.293,-3.293c-0.391,-0.391 -0.391,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.414,0c0.154,0.153 3.293,3.293 3.293,3.293c0,0 3.139,-3.139 3.293,-3.293c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.391 0.391,1.024 0,1.414c-0.153,0.154 -3.293,3.293 -3.293,3.293z" />
            </g>
        </g>
    </svg>
);
export default CloseIcon;
