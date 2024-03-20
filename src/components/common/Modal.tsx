import { FC, PropsWithChildren, ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    onClose?: () => void; // 모달을 닫는 함수를 prop으로 받습니다.
    backGroundColor?: string;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
    children,
    onClose,
    backGroundColor = 'bg-black/50',
}) => {
    const modal = (
        <div
            className={`
            fixed
            left-0
            top-0
            z-40
            flex h-screen
            w-screen items-center justify-center
           ${backGroundColor}
            
            `}
            onClick={onClose}
        >
            <div
                className="
            flex
            w-full
            justify-center px-2"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );

    return modal;
};

export default Modal;
