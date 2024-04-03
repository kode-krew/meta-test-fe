import { FC } from 'react';
import GlobalModal from '@src/components/common/modal/GlobalModal';
import Toaster from '@src/components/common/toast/Toast';
import './globals.css';
import TanstackQueryProvider from '@src/provider/TanstackQueryProvider';

interface LocaleLayoutProps {
    children: React.ReactNode;
}

const LocaleLayout: FC<LocaleLayoutProps> = ({ children }) => (
    <html lang="ko">
        <body>
            <TanstackQueryProvider>{children}</TanstackQueryProvider>
            <Toaster />
            <GlobalModal />
        </body>
    </html>
);

export default LocaleLayout;
