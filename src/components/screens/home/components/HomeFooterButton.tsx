import { FC } from 'react';
import RoundSquareButton from '@src/components/common/RoundSquareButton';

interface HomeFooterButtonProps {}

const HomeFooterButton: FC<HomeFooterButtonProps> = () => (
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
        <RoundSquareButton variant="primary">
            <p className="font-bold antialiased">테스트 시작</p>
        </RoundSquareButton>
    </div>
);

export default HomeFooterButton;
