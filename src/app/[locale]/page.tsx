import Button from '@src/components/common/Button';
import Body from '@src/components/screens/home/section/Body';
import Header from '@src/components/screens/home/section/Header';
import { useTranslations } from 'next-intl';

const Index = () => {
    const t = useTranslations('Index');

    return (
        <div className="w-screen">
            <Header />
            <Body />
        </div>
    );
};

export default Index;
