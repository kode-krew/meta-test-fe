import { FC } from 'react';
import GlobalModal from '@src/components/common/modal/GlobalModal';
import Toaster from '@src/components/common/toast/Toast';
import './globals.css';
import TanstackQueryProvider from '@src/provider/TanstackQueryProvider';
import Head from 'next/head';
import { Metadata } from 'next';

interface LocaleLayoutProps {
    children: React.ReactNode;
}
export const metadata: Metadata = {
    title: 'Meta Test',
    description: 'Meta Test',
    other: {
        'http-equiv': 'Content-Security-Policy',
        content: 'upgrade-insecure-requests'
    }
};

const LocaleLayout: FC<LocaleLayoutProps> = ({ children }) => (
    <html lang="ko">
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
        <body>
            <TanstackQueryProvider>
                {children}
                <Toaster />
                <GlobalModal />
            </TanstackQueryProvider>
        </body>
    </html>
);

export default LocaleLayout;
