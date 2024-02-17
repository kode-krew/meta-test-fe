import { FC } from 'react';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children, params: { locale = 'kr' } }) => (
    <html lang="kr">
        <body>{children}</body>
    </html>
);

export default LocaleLayout;
