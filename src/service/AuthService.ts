export interface AuthState {
    accessToken?: string;
}

type Subscriber = (state: AuthState) => void;

export class AuthService {
    private static instance: AuthService;
    private currentState: AuthState = { accessToken: undefined };
    private subscribers: Subscriber[] = [];

    private constructor() {}

    // 싱글톤 인스턴스 생성
    static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    // 구독 메서드 (상태 변경 시 알림 받기)
    subscribe(callback: Subscriber) {
        this.subscribers.push(callback);
    }

    // 현재 상태 반환
    getAccessToken(): string | undefined {
        return this.currentState.accessToken;
    }

    // 토큰 설정 (토큰 변경 시 구독자들에게 알림)
    setAccessToken(token: string | undefined) {
        this.currentState.accessToken = token;
        this.notifySubscribers();
        // 로컬 스토리지에 저장할 경우
        if (token) {
            localStorage.setItem('accessToken', token);
        } else {
            localStorage.removeItem('accessToken');
        }
    }

    // 상태가 변경되면 구독자들에게 알림
    private notifySubscribers() {
        for (const callback of this.subscribers) {
            callback(this.currentState);
        }
    }
}
