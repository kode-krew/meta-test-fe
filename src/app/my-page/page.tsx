import MyPageHeaderSection from '@src/components/screens/my-page/section/MyPageHeaderSection';
import MyPageTestRecordSection from '@src/components/screens/my-page/section/MyPageTestRecordSection';
import MyPageUserInformationSection from '@src/components/screens/my-page/section/MyPageUserInformationSection';
import { checkToken } from '@src/lib/server/auth/checkToken';
import { AuthService } from '@src/service/AuthService';
import { cookies } from 'next/headers';

const MyPage = async () => {
    const accessToken = cookies().get('atk')?.value;
    const { isLogin } = await checkToken(accessToken);

    return (
        <div className="flex flex-col gap-10">
            <MyPageHeaderSection isLogin={isLogin} />
            <MyPageUserInformationSection isLogin={isLogin} />
            <MyPageTestRecordSection isLogin={isLogin} />
        </div>
    );
};

export default MyPage;
