import { ReactNode } from 'react';

export interface ModalState {
    isOpen: boolean;
    content: ReactNode | null;
    backGroundColor?: string;
}

export class ModalService {
    static instance: ModalService;

    private currentState: ModalState = { isOpen: false, content: null }; // 현재 모달 상태 저장

    subscribers: ((state: ModalState) => void)[] = [];

    static getInstance(): ModalService {
        if (!ModalService.instance) {
            ModalService.instance = new ModalService();
        }
        return ModalService.instance;
    }

    subscribe(callback: (state: ModalState) => void) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback: (state: ModalState) => void) {
        this.subscribers = this.subscribers.filter((sub) => sub !== callback);
    }

    openModal(modalContent: ReactNode, backGroundColor?: string) {
        const newState = { isOpen: true, content: modalContent, backGroundColor };
        this.currentState = newState; // 현재 상태 업데이트
        this.subscribers.forEach((callback) => callback(newState));
    }

    closeModal() {
        const newState = { isOpen: false, content: null };
        this.currentState = newState; // 현재 상태 업데이트
        this.subscribers.forEach((callback) => callback(newState));
    }

    // 현재 모달의 열림 상태 확인
    isModalOpen(): boolean {
        return this.currentState.isOpen;
    }
}
