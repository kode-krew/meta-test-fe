import { FC, MouseEventHandler } from 'react';
import RoundSquareButton from '@src/components/common/RoundSquareButton';

interface HomeFooterButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const HomeFooterButton: FC<HomeFooterButtonProps> = ({ onClick }) => (
    <div
        className="
fixed
bottom-0
flex
h-44
w-screen
justify-center
"
    >
        <div className="w-full max-w-lg p-20">
            <RoundSquareButton variant="primary" onClick={onClick}>
                <p className="font-bold antialiased">테스트 시작</p>
            </RoundSquareButton>
        </div>
    </div>
);

export default HomeFooterButton;
