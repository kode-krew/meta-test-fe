import Button from '@src/components/common/Button';
import { useTranslations } from 'next-intl';

const Index = () => {
    const t = useTranslations('Index');

    return (
        <div className="md:container md:mx-auto">
            <h1 className="text-3xl font-bold underline">{t('title')}</h1>
            <Button type="button" classes="bg-stone-600 text-black hover:text-black">
                테스트용도
            </Button>
        </div>
    );
};

export default Index;
