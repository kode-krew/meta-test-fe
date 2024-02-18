import { FC } from 'react';

import '../globals.css';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params: { locale } }) => (
    <html lang={locale}>
        <body>{children}</body>
    </html>
);

export default LocaleLayout;
