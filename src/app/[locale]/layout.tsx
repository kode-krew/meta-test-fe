import { FC } from 'react';

import '../globals.css';
import HomeBody from '@src/components/screens/home/section/HomeBody';
import { useTranslations } from 'next-intl';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params: { locale } }) => {
    const t = useTranslations('Index');

    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
};

export default LocaleLayout;
