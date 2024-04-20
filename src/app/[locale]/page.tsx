import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const HomePage = () => {
    const token = getCookie('refreshToken', { cookies });
    return (
        <div className="w-screen">
            <HomeHeader isLoginSns={!!token} />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton />
        </div>
    );
};

export default HomePage;
