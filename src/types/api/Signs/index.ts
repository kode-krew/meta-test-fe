export type UserAccountType = 'NORMAL' | 'KAKAO' | 'GOOGLE';

export interface UserInformationResponse {
    Id?: string;
    email: string;
    nickname?: string;
    gender?: string;
    age?: number;
    userType: UserAccountType;
}
