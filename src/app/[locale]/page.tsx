import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';

const HomePage = () => (
    <div className="w-screen">
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
        <HomeFooterButton />
    </div>
);

export default HomePage;
