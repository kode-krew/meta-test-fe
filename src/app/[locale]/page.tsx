import Button from '@src/components/common/Button';
import HomeFooterButton from '@src/components/screens/home/components/HomeFooterButton';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import HomeFooter from '@src/components/screens/home/section/HomeFooter';
import HomeHeader from '@src/components/screens/home/section/HomeHeader';
import { useTranslations } from 'next-intl';

const Index = () => {
    const t = useTranslations('Index');

    return (
        <div className="w-screen">
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
            <HomeFooterButton />
        </div>
    );
};

export default Index;
