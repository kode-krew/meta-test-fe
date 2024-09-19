import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeaderButton from '@src/components/screens/home/section/HomeHeaderButton';
import axios, { isAxiosError } from 'axios';
import { cookies } from 'next/headers';

const reissueToken = async () => {
    try {
        await axios.put(`${process.env.NEXT_PUBLIC_MATE_TEST_WEB_HOST_URL}/api/auth`);
        return true;
    } catch (error) {
        return false;
    }
};

const checkToken = async (accessToken?: string) => {
    try {
        await axios(`${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/users`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return true;
    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error.response?.status === 401) {
            return await reissueToken();
        }
        return false;
    }
};

const HomePage = async () => {
    const accessToken = cookies().get('atk')?.value;
    const isLogin = await checkToken(accessToken);

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
