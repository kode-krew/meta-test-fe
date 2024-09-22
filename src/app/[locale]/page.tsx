import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeaderButton from '@src/components/screens/home/section/HomeHeaderButton';
import { checkToken } from '@src/lib/server/auth/checkToken';
import { AuthService } from '@src/service/AuthService';
import { cookies } from 'next/headers';

const HomePage = async () => {
    const accessToken = cookies().get('atk')?.value;
    const { isLogin } = await checkToken(accessToken);

    return (
        <div className="w-screen">
            <header className="m-5 flex h-10 flex-row-reverse">
                <HomeHeaderButton isLogin={isLogin} />
            </header>
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton />
        </div>
    );
};
export default HomePage;
