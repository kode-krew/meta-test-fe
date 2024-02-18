import { useTranslations } from 'next-intl';

const Index = () => {
    const t = useTranslations('Index');
    return <h1 className="text-3xl font-bold underline">{t('title')}</h1>;
};

export default Index;
