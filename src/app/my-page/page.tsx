import MyPageHeaderSection from '@src/components/screens/my-page/section/MyPageHeaderSection';
import MyPageTestRecordSection from '@src/components/screens/my-page/section/MyPageTestRecordSection';
import MyPageUserInformationSection from '@src/components/screens/my-page/section/MyPageUserInformationSection';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const MyPage = () => {
    const token = getCookie('refreshToken', { cookies });

    return (
        <div className="flex flex-col gap-10">
            <MyPageHeaderSection isLogin={!!token} />
            <MyPageUserInformationSection isLogin={!!token} />
            <MyPageTestRecordSection isLoginSns={!!token} />
        </div>
    );
};

export default MyPage;
