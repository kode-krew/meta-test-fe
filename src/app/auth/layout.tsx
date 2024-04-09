import { FC } from 'react';

import { useTranslations } from 'next-intl';

interface HomePageLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const HomePageLayout: FC<HomePageLayoutProps> = ({ children, params: { locale } }) => (
    <div>
        <div>{children}</div>
    </div>
);

export default HomePageLayout;
