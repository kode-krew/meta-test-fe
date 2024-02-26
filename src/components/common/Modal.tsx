import { FC, PropsWithChildren, ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    onClose: () => void; // 모달을 닫는 함수를 prop으로 받습니다.
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, onClose }) => (
    <div
        className="
      fixed
      top-0
      z-40
      flex h-screen
      w-screen items-center justify-center
      bg-black bg-opacity-50" // 배경을 반투명하게 만듭니다.
        onClick={onClose} // 배경을 클릭하면 모달이 닫히도록 합니다.
    >
        <div
            className="
        rounded-lg
        bg-white
        p-8" // 모달 창을 스타일링합니다.
            onClick={(e) => e.stopPropagation()} // 모달 창을 클릭했을 때는 모달이 닫히지 않도록 합니다.
        >
            {children}
        </div>
    </div>
);

export default Modal;
