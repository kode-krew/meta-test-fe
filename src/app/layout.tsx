import { FC } from 'react';

import './globals.css';

interface LocaleLayoutProps {
    children: React.ReactNode;
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children }) => (
    <html lang="ko">
        <body>{children}</body>
    </html>
);

export default LocaleLayout;
