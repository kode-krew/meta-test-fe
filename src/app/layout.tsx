import { FC } from 'react';
import Toaster from '@src/components/common/toast/Toast';
import './globals.css';

interface LocaleLayoutProps {
    children: React.ReactNode;
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children }) => (
    <html lang="ko">
        <body>
            {children}
            <Toaster />
        </body>
    </html>
);

export default LocaleLayout;
