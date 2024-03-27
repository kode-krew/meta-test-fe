type ToastObserver = (message: string) => void;

export class ToastService {
    private static instance: ToastService;

    private observers: ToastObserver[] = [];

    private messages: string[] = []; // 메시지 목록 관리

    public static getInstance(): ToastService {
        if (!ToastService.instance) {
            ToastService.instance = new ToastService();
        }
        return ToastService.instance;
    }

    subscribe(observer: ToastObserver) {
        this.observers.push(observer);
    }

    unsubscribe(observer: ToastObserver) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify() {
        this.observers.forEach((observer) => observer(this.messages[this.messages.length - 1]));
    }

    addToast(message: string) {
        if (this.messages.length >= 3) {
            // 최대 메시지 수를 초과할 경우 가장 오래된 메시지 제거
            this.messages.shift();
        }
        this.messages.push(message);
        this.notify();
    }
}
