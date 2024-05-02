import MyPageHeaderSection from '@src/components/screens/my-page/section/MyPageHeaderSection';
import MyPageTestRecordSection from '@src/components/screens/my-page/section/MyPageTestRecordSection';
import MyPageUserInformationSection from '@src/components/screens/my-page/section/MyPageUserInformationSection';
import { Cookies, useCookies } from 'react-cookie';

const MyPage = () => {
    const cookie = new Cookies();

    return (
        <div className="flex flex-col gap-10">
            <MyPageHeaderSection isLogin={!!cookie.get('refreshToken')} />
            <MyPageUserInformationSection isLogin={!!cookie.get('refreshToken')} />
            <MyPageTestRecordSection isLoginSns={!!cookie.get('refreshToken')} />
        </div>
    );
};

export default MyPage;
