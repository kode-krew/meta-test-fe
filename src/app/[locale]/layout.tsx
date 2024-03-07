import { FC } from 'react';

import { useTranslations } from 'next-intl';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params: { locale } }) => {
    const t = useTranslations('Index');

    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default LocaleLayout;
