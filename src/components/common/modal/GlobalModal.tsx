'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Modal from './Modal';
import { ModalService, ModalState } from './ModalService';

const GlobalModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState<
        Array<{ content: ReactNode; backGroundColor?: string }>
    >([]);

    useEffect(() => {
        const modalService = ModalService.getInstance();
        const handleModalChange = ({
            isOpen: isModalOpen,
            contents: modalContents,
        }: ModalState) => {
            setIsOpen(isModalOpen);
            setContents(modalContents);
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
        <>
            {contents.map(({ content, backGroundColor }) => (
                <Modal
                    key={crypto.randomUUID()}
                    onClose={() => ModalService.getInstance().closeModal()}
                    backGroundColor={backGroundColor}
                >
                    {content}
                </Modal>
            ))}
        </>
    );
};

export default React.memo(GlobalModal);
