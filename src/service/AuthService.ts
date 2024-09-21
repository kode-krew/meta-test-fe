export interface AuthState {
    accessToken?: string;
    isLogin: boolean;
}

type Subscriber = (state: AuthState) => void;

export class AuthService {
    private static instance: AuthService;
    private currentState: AuthState = { accessToken: undefined, isLogin: false };
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

    // 구독 해제 메서드
    unsubscribe(callback: Subscriber) {
        this.subscribers = this.subscribers.filter((sub) => sub !== callback);
    }

    // 현재 상태 반환
    getAccessToken(): string | undefined {
        return this.currentState.accessToken;
    }

    // 현재 로그인 상태 반환

    getIsLogin(): boolean | undefined {
        return this.currentState.isLogin;
    }

    // 토큰 설정 (토큰 변경 시 구독자들에게 알림)
    setAccessToken(token: string | undefined) {
        this.currentState.accessToken = token;
        this.notifySubscribers();
    }

    setLoginState(isLogin: boolean) {
        this.currentState.isLogin = isLogin;
        console.log('Login State Updated: ', this.currentState.isLogin); // 상태가 제대로 변경되는지 확인
        this.notifySubscribers();
    }

    // 상태가 변경되면 구독자들에게 알림
    private notifySubscribers() {
        for (const callback of this.subscribers) {
            callback(this.currentState);
        }
    }
}
