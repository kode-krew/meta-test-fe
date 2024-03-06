import { FC, PropsWithChildren, ReactNode } from 'react';
import Portal from './Portal';

interface ModalProps {
    children: ReactNode;
    onClose: () => void; // 모달을 닫는 함수를 prop으로 받습니다.
    isPortal?: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, onClose, isPortal }) => {
    const modal = (
        <div
            className="
            fixed
            left-0
            top-0
            z-40
            flex h-screen
            w-screen items-center justify-center
            bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="
                w-3/6
                rounded-lg
                bg-white
                p-0"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );

    return modal;
};

export default Modal;
