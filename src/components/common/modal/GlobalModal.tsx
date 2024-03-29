'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Modal from './Modal';
import { ModalService } from './ModalService';

const GlobalModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [backGroundColor, setBackGroundColor] = useState<string | undefined>(undefined);

    useEffect(() => {
        const modalService = ModalService.getInstance();

        const handleModalChange = ({
            isOpen: isModalOpen,
            content: modalContent,
            backGroundColor: modalBackGroundColor,
        }: {
            isOpen: boolean;
            content: ReactNode;
            backGroundColor?: string;
        }) => {
            setIsOpen(isModalOpen);
            setContent(modalContent);
            setBackGroundColor(modalBackGroundColor);
        };

        modalService.subscribe(handleModalChange);

        return () => {
            modalService.unsubscribe(handleModalChange);
        };
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <Modal
            onClose={() => ModalService.getInstance().closeModal()}
            backGroundColor={backGroundColor}
        >
            {content}
        </Modal>
    );
};

export default React.memo(GlobalModal);
