import { FC } from 'react';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

interface HomePageLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const HomePageLayout: FC<HomePageLayoutProps> = ({ children, params: { locale } }) => (
    <div>
        <Head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <div>{children}</div>
    </div>
);

export default HomePageLayout;
